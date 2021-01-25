import React from 'react';
import Quill from 'quill';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core/styles';

import QuillToolbar from './QuillToolbar';
import { formats } from './formats';

const useStyles = makeStyles(
  theme => ({
    editor: {
      padding: theme.spacing(2),
    },
  })
);

const configureQuill = (quill) => {
  const toolbar = quill.getModule('toolbar');
};

const variables = [
  { id: 1, value: "Name" },
  { id: 2, value: "Email" },
  { id: 3, value: "FirstName" },
  { id: 4, value: "LastName" },
];

const handlebarsList = (searchTerm, renderList, handlebarsChar) => {
  return fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
    .then(response => {
      if (searchTerm.length === 0) {
        renderList(variables, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < variables.length; i++)
          if (
            ~variables[i].value
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase())
          )
            matches.push(variables[i]);
        renderList(matches, searchTerm);
      }
    });
};

const handleHandlebars = (_this, value) => {
  /* insert handlebars variable here */
  console.log('this: ', _this);
  console.log('value: ', value);
};

const options = {
  formats,
  modules:{
    handlebars: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      handlebarsDenotationChars: ["{{"],
      source: handlebarsList,
    },
    toolbar: {
      container: '#toolbar',
      handlers: {
        handlebars: function(value) {
          return handleHandlebars(this, value);
        }
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
}) => {
  const classes = useStyles();

  return (
    <>
      <QuillToolbar />
      <RichTextInput
        {...rest}
        className={classes.editor}
        configureQuill={configureQuill}
        label={label}
        options={options}
        source={source} />
    </>
  );
};

export default QuillEditor;
