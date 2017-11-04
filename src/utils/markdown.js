import React from 'react';
import  ReactMarkdown  from 'react-markdown';

export const RenderMarkdown = ({ content }) => {
  return (
    <ReactMarkdown
      source={content}
      renderers={{Link: props => {
        if (props.href.startsWith('/')) {
          return <a href={props.href}>{props.children}</a>;
        }
        // If link to external site, open in new tab
        return (
          <a href={props.href} target="_blank">{props.children}</a>
        )
      }}}
    />
  )
}
