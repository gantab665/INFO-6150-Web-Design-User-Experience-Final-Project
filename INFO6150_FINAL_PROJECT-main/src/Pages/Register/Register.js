import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const initialValues = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(/^[a-zA-Z0-9 ]+$/, 'Username should only contain letters, numbers, and spaces')
            .min(1, 'Full name is required')
            .required('Full name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required')
            .test('emailDomain', 'Email domain must be northeastern.edu', (value) => {
                return value.endsWith('northeastern.edu');
            }),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                'Password must contain at least one lowercase letter, one uppercase letter, and one digit'
            )
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
        // Handle form submission
        try {
            const response = await fetch('http://localhost:4000/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                // Registration successful
                console.log('Registration successful');
                // Redirect to login page
                navigate('/login');
                resetForm();
            } else {
                // Registration failed
                const data = await response.json();

                if (data.error) {
                    // Handling specific error cases
                    if (data.error === 'Email already in use') {
                        setErrors({ email: 'Email already in use' });
                    } else {
                        // Handle other specific error cases if needed
                        console.error('Registration failed:', data);
                    }
                } else if (data.errors && Array.isArray(data.errors)) {
                    // Map the API error format to Formik errors
                    const apiErrors = {};
                    data.errors.forEach((error) => {
                        apiErrors[error.param] = error.msg;
                    });
                    setErrors(apiErrors);
                } else {
                    console.error('Unexpected error format:', data);
                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle the error, e.g., display an error message to the user
            setErrors({ general: 'Internal Server Error' });
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        // Disable the submit button on mount
        document.getElementById('registerBtn').disabled = true;
    }, []);

    return (
        <div className='login-container'>
              <Row className="justify-content-center" style={{width:'40%'}}>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Register</h2>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                {({ isSubmitting, isValid }) => (
                                    <Form>
                                        <div className="mb-3">
                                            <Field type="text" name="fullName" placeholder="Full Name" className="form-control" />
                                            <ErrorMessage name="fullName" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-3">
                                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-3">
                                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-3">
                                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                        </div>

                                        {isSubmitting && <p className="text-center">Submitting...</p>}

                                        <Button id="registerBtn" type="submit" variant="primary" className="w-100" disabled={!isValid}>
                                            Register
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
          
       
    );
};

export default Register;