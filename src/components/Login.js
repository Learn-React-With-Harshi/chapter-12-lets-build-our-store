
import React, {useContext, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import logo from '../../assets/images/logo-main.png';
import  UserContext  from "../utils/UserContext";

const Login = () => {
  const {user, setUser} = useContext(UserContext);

  const loginUser = (values) => {
    let response = {};
    let user_email = values.email;
    //do some authentication and server response, for now anyone can login
    if(true) {
      response = {
        name : user_email.substring(0, user_email.indexOf("@")),
        email : user_email,
        isAuthenticated : true
      }
    } else {
      response = {
        isAuthenticated : false
      }
    }
    
    return response;
  }

  return (
  <div className="login-container mt-[100px] min-h-9 text-center flex">
  
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await loginUser(values);
        console.log("OnSubmit", response);
        setUser(response);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="border border-gray shadow basis-[500px] h-[400px] m-auto flex items-center justify-center flex-col gap-3 mob:basis-[300px] mob:h-[360px]">
          <span className="text-blue-dark text-lg font-extrabold mob:text-sm">{user.msg ? user.msg : "Welcome to Insta Food. "} Please Login!</span>
          <img className="w-[70px] ml-2.5 mob:mx-auto" alt="logo" src= {logo} />
          {isSubmitting && <div>Loading...</div>}
          <div className="flex justify-center p-2.5">
            <label htmlFor="email" className="p-2.5 w-[100px] mob:text-left mob:h-8 mob:text-sm">Email</label>
            <Field type="email" name="email" id="email" className="outline-none p-1 text-sm h-10 w-[200px] rounded-md bg-gray mob:w-[180px] mob:h-8" 
            />
          </div>
          <ErrorMessage name="email" component="div"  id="pwd" className="error-text"/>

          <div className="pwd flex justify-center p-2.5">
            <label htmlFor="password" className="pwd-label p-2.5 w-[100px] mob:text-left mob:h-8 mob:text-sm">Password</label>
            <Field type="password" name="password" id="pwd" className="outline-none p-1 text-sm h-10 w-[200px] rounded-md bg-gray mob:w-[180px] mob:h-8" />
          </div>
          <ErrorMessage name="password" component="div" className="error-text"/>

          <div className='submit'>
            <button className="btn btn--primary w-[80px]" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>

            

        </Form>
      )
      
    }
    </Formik>
    { user.isAuthenticated  && <Navigate to="/" replace={true} />}
  </div>


  )}



export default Login;