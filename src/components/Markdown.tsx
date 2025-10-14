import rehypeRaw from 'rehype-raw';
import ReactMarkdown, { Options } from 'react-markdown';
import React from 'react';

const Markdown = ({ rehypePlugins, ...props }: Options) => {
  return (
      <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw, ...(rehypePlugins ?? [])]} {...props} />
  )
}

export default Markdown
