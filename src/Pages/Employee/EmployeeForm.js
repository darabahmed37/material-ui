import React from 'react';
import {Grid, makeStyles,} from "@material-ui/core";
import useForm, {Form} from '../../Components/useForm'
import {Controls} from '../../Components/controls/controls'
import {getDepartmentCollection} from "../../services/EmployeeServices";

const genderItems = [{
  id: 'male',
  title: "Male"
}, {
  id: 'female',
  title: "Female"
}, {
  id: 'others',
  title: "Others"
},]
const initialValues = {
  id: 0,
  name: '',
  email: '',
  mobile: '',
  city: '',
  gender: "male",
  department: "",
  hireDate: new Date(),
  isPermanent: false
}

const EmployeeForm = () => {
  const {values, setValues, handleInputChange} = useForm(initialValues)

  return (
    <Form>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input name={'name'}
                          label={'Full Name'}
                          value={values.name}
                          onChange={handleInputChange}
          />
          <Controls.Input
            label={"Email"}
            name={'email'}
            value={values.email}
            onChange={handleInputChange}
          /> <Controls.Input
          label={"Mobile"}
          name={'mobile'}
          value={values.mobile}
          onChange={handleInputChange}
        /> <Controls.Input
          label={"City"}
          name={'city'}
          value={values.city}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={12} md={6}>
          
          <Controls.RadioGroup
            name={'gender'}
            label={'Gender'}
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          
          <Controls.Select
            name={'department'}
            label={"Department"}
            values={values.department}
            onChange={handleInputChange}
            option={
              getDepartmentCollection()
            }
          />
          <Controls.DatePicker
            name={'hireDate'}
            value={values.hireDate}
            onChange={handleInputChange}
            label={'Hire Date'}
          />
          <Controls.CheckBox
            name={'isPermanent'}
            value={values.isPermanent}
            onChange={handleInputChange}
            label={'Permanent Employee'}
          
          />
          <div className={'d-flex'}>
            <Controls.Button
              text={'Submit'}
              type={'submit'}
            />
            <Controls.Button
              text={'Reset'}
              color={'default'}
            />
          </div>
        
        </Grid>
      </Grid>
    </Form>
  
  );
};

export default EmployeeForm;