import React from 'react';
import {
  Create,
  Datagrid,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostList = (props) => (
  <List
    bulkActionButtons={false}
    exporter={false}
    {...props}>
    <Datagrid>
      <TextField source="title" />
    </Datagrid>
  </List>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);
