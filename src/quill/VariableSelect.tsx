import React, { useState } from 'react';
import { useQuery } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(
  theme => ({
    button: {
      marginLeft: theme.spacing(1),
    },
  })
);

interface Props {
  onVariableInsert: (x: string) => void;
  resource: string;
}

const VariableSelect = ({
  onVariableInsert,
  resource,
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const { data: variables, loading, error } = useQuery({
    type: 'getList',
    resource,
    payload: {
      filter: {},
      pagination: { page: 1, perPage: 100 },
      sort: { field: 'key', order: 'ASC' },
    },
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onVariableInsert(value);
  };

  return variables ? (
    <>
      <Select
        inputProps={{
          name: 'value'
        }}
        value={value}
        onChange={handleChange}>
        {variables.map(variable =>
          <MenuItem value={variable.key}>{variable.label}</MenuItem>
        )}
      </Select>
      <Button
        color="primary"
        className={classes.button}
        disabled={variables.length < 1}
        onClick={handleClick}
        variant="outlined">
        Insert
      </Button>
    </>
  ) : null;
};

export default VariableSelect;
