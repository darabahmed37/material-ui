import React from 'react';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DatesFnsUtils from '@date-io/date-fns'

const DatePicker = ({name, label, value, onChange}) => {
  
  const convertToDefEventPara = (name, value) => (
    {
      target: {
        name,
        value
      }
    })
  return (
    <MuiPickersUtilsProvider utils={DatesFnsUtils}>
      <KeyboardDatePicker disableToolbar variant={'inline'}
                          inputVariant={'outlined'}
                          label={label}
                          format={'MMM/dd/yyyy'}
                          name={name}
                          value={value}
                          onChange={date => onChange(convertToDefEventPara(name, date))}
      
      >
      
      </KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;