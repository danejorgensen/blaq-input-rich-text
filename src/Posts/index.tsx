import React, { Fragment } from "react";
import {
  Create,
  Datagrid,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from "ra-input-rich-text";
import "quill-handlebars";
import "quill-handlebars/dist/quill.handlebars.css";

import QuillEditor from '../quill/QuillEditor';

export const PostList = (props) => (
  <List bulkActionButtons={false} exporter={false} {...props}>
    <Datagrid>
      <TextField source="title" />
    </Datagrid>
  </List>
);

const useStyles = makeStyles({
  createPost: {
    '& div': {
      overflow: 'visible !important'
    }
  }
});

export const PostCreate = (props) => {
  const classes = useStyles();

  return (
    <Create className={classes.createPost} {...props}>
      <SimpleForm >
        <TextInput source="title" />
        <QuillEditor />
      </SimpleForm>
    </Create>
  );
};
