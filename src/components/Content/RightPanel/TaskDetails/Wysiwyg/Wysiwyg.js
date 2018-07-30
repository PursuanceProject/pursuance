import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createAutoListPlugin from 'draft-js-autolist-plugin'
import './Wysiwyg.css';
import {markdownToDraft, draftToMarkdown} from 'markdown-draft-js';
import ReactMarkdown from 'react-markdown';
import createMarkdownPlugin from 'draft-js-markdown-plugin';

const linkifyPlugin = createLinkifyPlugin();
const autoListPlugin = createAutoListPlugin();

const plugins = [
  autoListPlugin,
  createMarkdownPlugin()
];

class Wysiwyg extends Component {
  componentWillMount() {
    const {tasks: { taskMap }, taskGid, attributeName} = this.props,
      attributeValue = taskMap[taskGid][attributeName],
      content = attributeValue ? markdownToDraft(attributeValue, {
        remarkableOptions: {
          html: true,
          preserveNewlines: true
        }
      }) : markdownToDraft('');

      console.log('attributeValue', attributeValue);

    

    this.state = {
      editMode: false,
      editorState: EditorState.createWithContent(convertFromRaw(content))
    };
  }

  editModeEnable = () => {
    this.setState({
      editMode: true
    });
  };

  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  save = () => {
    const {patchTask} = this.props,
      markdown = draftToMarkdown(convertToRaw(this.state.editorState.getCurrentContent())),
      payload = {gid: this.props.taskGid};

    payload[this.props.attributeName] = markdown;

    patchTask(payload);

    this.setState({
      editMode: false
    });
  }

  render() {
    const {tasks: {taskMap}} = this.props,
      attributeValue = taskMap[this.props.taskGid][this.props.attributeName];

    return (
      <div>          
        {
          this.state.editMode && (
            <div>
              <div className='wysiwyg'>
                <Editor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  plugins={plugins}
                />
              </div>
              <button className='wysiwyg-save' 
                onClick={this.save}>Save</button>
            </div>
          )
        }
        {
          !this.state.editMode && (
            <div>
              <ReactMarkdown
                source={attributeValue}
                render={{Link: props => {
                  console.log('props.href', props.href);
                  if (props.href.startsWith('/')) {
                    return <a href={props.href}>{props.children}</a>;
                  }
                  // If link to external site, open in new tab
                  return <a href={props.href} target="_blank">{props.children}</a>;
                }}} />
              <button className='wysiwyg-edit' onClick={this.editModeEnable}>Edit</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(({tasks}) => ({tasks}), null)(Wysiwyg);
