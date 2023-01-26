
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import * as yup from 'yup'
// import { useState } from 'react';

function FormicAndYupArrore(props) {

    const [type, setType] = useState("signup");
    // const [reset, setReset] = useState(false);
    // const [reset, setReset] = useState("0");

    // const first= () => {
    //     console.log("hellow");
    // }

    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        email: yup.string().email('invalid email').required('please enter email'),
        mono: yup.string().required("please enter mobail number"),

        date: yup.string().required("please enter date:")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            mono: '',
            date: '',
        },

        // validationSchema: schema,

        onSubmit: values => {
            console.log(values);

        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched } = formikobj

    return (
        <>
            <div>

                <h1>h1</h1>
                <h1>h1</h1>
                <h1>h1</h1>
                <Formik values={formikobj}>
                    <Form onSubmit={handleSubmit}>

                        {
                            type === "signup" ?
                                <h1>Sign Up</h1> : <h1>Signin</h1>
                        }

                        <div>
                            {type === "signup" ?
                                <input
                                    name='name'
                                    type="text"
                                    placeholder='Name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // onClick={{first}}
                                /> :
                                null
                            }
                            {errors.name !== '' && touched.name ? <p className='form-error'>{errors.name}</p> : null}

                        </div>

                        <div>

                            <input
                                type="email"
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email !== '' && touched.email ? <p className='form-error'>{errors.email}</p> : null}

                        </div>

                        <div>
                            {
                                type === "signup" ?
                                    <input
                                        type="date"
                                        name='date'
                                        placeholder='Date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        
                                    /> 
                                    
                                    : null
                            }
                            {errors.date !== '' && touched.date ? <p className='form-error'>{errors.date}</p> : null}

                        </div>

                        <div>
                        {
                            type === "signup" ?
                            <a href='#' onClick={() => { setType("login") }} >Login</a> :
                            <a href='#' onClick={() => { setType("signup") }} >signup</a> 

                        }
                    </div>

                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default FormicAndYupArrore;