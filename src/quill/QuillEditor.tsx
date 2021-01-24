import React from 'react';
import Quill from 'quill';
import RichTextInput from 'ra-input-rich-text';

import QuillToolbar from './QuillToolbar';

const handleInsert = (props) => {
  console.log('toolbars.handler.handleInsert: ', props);
}

const configureQuill = (quill) => {
  const toolbar = quill.getModule('toolbar');
};

const atValues = [
  { id: 1, value: "Name" },
  { id: 2, value: "Email" },
  { id: 3, value: "FirstName" },
  { id: 4, value: "LastName" },
];

const hashValues = [
  { id: 1, value: "Name" },
  { id: 2, value: "Email" },
  { id: 3, value: "FirstName" },
  { id: 4, value: "LastName" },
];

const asyncHandlebarsList = (searchTerm, renderList, handlebarsChar) => {
  console.group('Handlebars');
  console.log('searchTerm: ', searchTerm);
  console.log('renderList: ', renderList);
  console.log('handlebarsChar: ', handlebarsChar);
  console.groupEnd();

  /* fetch results here */

  return fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
    .then(response => {
      return renderList(atValues, searchTerm);
    });
};

const handlebarsList = (searchTerm, renderList, handlebarsChar) => {
  let values;

  if (handlebarsChar === "{{") {
    values = atValues;
  } else {
    values = hashValues;
  }

  if (searchTerm.length === 0) {
    renderList(values, searchTerm);
  } else {
    const matches = [];
    for (let i = 0; i < values.length; i++)
      if (
        ~values[i].value
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase())
      )
        matches.push(values[i]);
    renderList(matches, searchTerm);
  }
};

const options = {
  modules:{
    handlebars: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      handlebarsDenotationChars: ["{{"],
      source: asyncHandlebarsList,
    },
    toolbar: {
      container: '#toolbar',
      handlers: {
        handleInsert,
      }
    },
  }
};

interface Props {
  label?: boolean;
  source: string;
};

const QuillEditor = ({
  label = false,
  source = 'body',
  ...rest
}) => (
  <>
    <QuillToolbar />
    <RichTextInput
      {...rest}
      configureQuill={configureQuill}
      label={label}
      options={options}
      source={source} />
  </>
);

export default QuillEditor;
