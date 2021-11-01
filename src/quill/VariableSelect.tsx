import React, { useState } from 'react';
import { useQuery } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    button: {
      marginLeft: theme.spacing(1),
    },
  })
);

interface Variable {
  id: number;
  value: string;
}

const variables: Variable[] = [
  { id: 1, value: "Name" },
  { id: 2, value: "Email" },
  { id: 3, value: "FirstName" },
  { id: 4, value: "LastName" },
];

interface Props {
  onVariableInsert?: (x: string) => void;
  resource: string;
}

const VariableSelect = ({
  onVariableInsert,
  resource,
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

/*
  const { data: variables, loading, error } = useQuery({
    type: 'getList',
    resource,
    payload: {
      filter: {},
      pagination: { page: 1, perPage: 100 },
      sort: { field: 'key', order: 'ASC' },
    },
  });
*/

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onVariableInsert(value);
  };

  return variables ? (
    <select className="ql-handlebars">
      {variables.map(variable =>
        <option value={variable.value}>{variable.value}</option>
      )}
    </select>
  ) : null;
};

export default VariableSelect;
