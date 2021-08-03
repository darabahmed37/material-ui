import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio,RadioGroup as MuiRadioGroup} from "@material-ui/core";

const RadioGroup = ({name, label, value, onChange, items}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}>
        {
          items.map((item,index) => (
          <FormControlLabel id={item.id} control={<Radio/>} label={item.title} value={item.id}/>
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;