import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState({})
  
  function handleInputChange(e) {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  
  return {
    values,
    setValues,
    handleInputChange,
    error,
    setError
  };
}
const useStyle = makeStyles(theme => (
  {
    root: {
      '& .MuiFormControl-root': {
        width: "80%",
        margin: theme.spacing(1)
      }
    }
  }
))

export function Form({children, ...others}) {
  const classes = useStyle()
  return (
    <form className={classes.root} {...others} autoComplete={'off'}>
      {children}
    </form>
  )
}