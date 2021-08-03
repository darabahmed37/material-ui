import React from 'react';
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from "@material-ui/core";

const Select = ({name, label, values, onChange, option}) => {
  return (
    <FormControl
      variant={"outlined"}
    ><InputLabel>{label}</InputLabel>
      <MuiSelect
      name={name}
      value={values}
      onChange={onChange}
      label={label}
      >
      <MenuItem value="" >Select One</MenuItem>
        {
          option.map(o=>(
            <MenuItem key={o.id} value={o.id}>{o.title}</MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  );
};

export default Select;