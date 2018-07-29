import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import wysiwygStyles from './Wysiwyg.css';
import {markdownToDraft, draftToMarkdown} from 'markdown-draft-js';
import {patchTask} from '../../../../../actions';
import ReactMarkdown from 'react-markdown';

const linkifyPlugin = createLinkifyPlugin();

const plugins = [
  linkifyPlugin
];

class Wysiwyg extends Component {
  componentWillMount() {
    const {tasks: { taskMap }, taskGid, attributeName} = this.props; 
    console.log('tasks', taskMap);
    console.log('tasksg', taskGid);
    console.log('attributeName', attributeName);



    const attributeValue = taskMap[taskGid][attributeName],
      content = attributeValue ? markdownToDraft(attributeValue) : markdownToDraft('');
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
    console.log(editorState);
    this.setState({
      editorState
    });
  };

  save = () => {
    const markdown = draftToMarkdown(convertToRaw(this.state.editorState.getCurrentContent())),
      payload = {gid: this.props.taskGid};

    payload[this.props.attributeName] = markdown;

    this.setState({
      editMode: false
    });

    patchTask(payload)
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
                source={taskMap[this.props.taskGid][this.props.attributeName]}
                render={{Link: props => {
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

export default withRouter(connect(
  ({tasks}) => ({tasks}),
  {patchTask}
)(Wysiwyg));
