import React from 'react';
import {FormControl, FormControlLabel} from "@material-ui/core";
import MuiCheckBox from '@material-ui/core/Checkbox'

const CheckBox = ({name, label, value, onChange}) => {
  const convertToDefEventPara = (name, value) => (
    {
      target: {
        name,
        value
      }
    }
  )
  return (
    <FormControl>
      <FormControlLabel control={
        <MuiCheckBox name={name}
                     color={'primary'}
                     checked={value}
                     onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
        />}
      
                        label={label}
      />
    </FormControl>);
};

export default CheckBox;