import React from 'react';
import {TextField} from "@material-ui/core";

const Input = ({name, label, value, error = null, onChange}) => {
  
  return (
    <TextField
      variant={"outlined"}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      {...(error && {error: true, helperText: error})}
    />
  );
};

export default Input;