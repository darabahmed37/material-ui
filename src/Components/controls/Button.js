import React from 'react';
import {Button as MuiButton, makeStyles} from '@material-ui/core'

const style = makeStyles(theme => (
  {
    root: {
      margin: theme.spacing(0.5)
    },
    label: {
      textTransform: "none"
    }
  }
))
const Button = ({text, size, color, variant, onClick, ...others}) => {
  const classes = style()
  
  return (
    <div>
      <MuiButton
        variant={variant || "contained"}
        onClick={onClick}
        color={color || 'primary'}
        size={size || 'large'}
        {...others}
        classes={{root: classes.root, label: classes.label}}
      >{text}</MuiButton>
    </div>
  );
};

export default Button;