import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
// import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispath = useDispatch();

    // const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log('Form Submit', values);
        try {
            // auto set username = email
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispath(action);
            unwrapResult(resultAction);

            // close Dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
            // console.log('new user', user);
            // enqueueSnackbar('Register Success', { variant: 'success' })
        } catch (error) {
            console.log('failed is Register', error);
            // enqueueSnackbar(error.message, { variant: 'error' })
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;