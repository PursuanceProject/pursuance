import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export const RenderMarkdown = ({ content }) => {
  return (
    <ReactMarkdown
      source={content}
      renderers={{
        Link: props => {
          if (props.href.startsWith('/')) {
            return <Link to={props.href}>{props.children}</Link>;
          }
          // If link to external site, open in new tab
          return (
            <Link to={props.href} target="_blank">
              {props.children}
            </Link>
          );
        }
      }}
    />
  );
};
