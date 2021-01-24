import React from 'react';
import Quill from 'quill';
import RichTextInput from 'ra-input-rich-text';

import QuillToolbar from './QuillToolbar';

const handleInsert = (props) => {
  console.log('handleInsert: ', props);
}

const configureQuill = (quill) => {
  const toolbar = quill.getModule('toolbar');
  //toolbar.addHandler('handlebars', (value) => { console.log('value: ', value); });
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
  /* fetch results here */
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
      source: handlebarsList,
    },
    toolbar: {
      container: '#toolbar',
      handlers: {
        handleInsert,
      }
    },
  }
};

const QuillEditor = (props) => (
  <>
    <QuillToolbar />
    <RichTextInput
      {...props}
      configureQuill={configureQuill}
      label={false}
      options={options}
      source="body" />
  </>
);

export default QuillEditor;
