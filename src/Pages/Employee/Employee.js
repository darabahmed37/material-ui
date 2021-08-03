import React from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import {PeopleOutlineTwoTone} from "@material-ui/icons";
import {makeStyles, Paper} from "@material-ui/core";

const useStyle = makeStyles(theme => (
  {
  pageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
  }
  }
))
const Employee = () => {
 const classes=useStyle()
  return (
    <>
      <PageHeader
        title={"New Employee"}
        subTitle={"Form Design with validation"}
        icon={<PeopleOutlineTwoTone fontSize={"large"}/>}
      />
    <Paper className={classes.pageContent}> <EmployeeForm/></Paper>
    </>
  );
};

export default Employee;