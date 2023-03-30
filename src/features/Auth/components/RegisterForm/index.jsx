import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
// import InputField from '../../../../components/form-controls/InputField';
import InputField from '../../../../components/formControl/InputField';
import PasswordField from '../../../../components/formControl/PasswordField';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        position: 'Relative',
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 1, 0),
        textAlign: 'center'
    },

    submit: {
        margin: theme.spacing(1.5, 0, 0, 0),
    },

}));


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    // const schema = yup.object().shape({
    //     fullname: yup.string()
    //     .required(' pls enter your full name')
    //     // .test('should has at least two work', ' pls enter at least two work.', values => {
    //     //     // console.log(value);
    //     //     return values.split(' ').length >= 2;
    //     // }), 
    // });     

    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Please enter your full name.')
            .test('Should has at least two words.', 'Please enter at least two words.', value => {
                return value.split(' ').length >= 2;
            }),

        email: yup.string()
            .required('pls enter your email')
            .email('pls enter a valid email your ok '),

        password: yup.string()
            .required('pls enter your password')
            .min(6, 'pls input in 6 word'),

        retypePassword: yup.string()
            .required('pls enter your password')
            .oneOf([yup.ref('password')], ('password dose not match'))
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        // reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        // console.log('Todo Form', values);
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

        // form.reset();
    };

    const { isSubmitting } = form.formState;


    return (
        <div className={classes.root}>
            {isSubmitting &&
                <Box sx={{
                    width: '100%',
                    position: 'Absolute',
                }}>
                    <LinearProgress />
                </Box>
            }

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create An Acccount
            </Typography>


            <form onSubmit={form.handleSubmit(handleSubmit)} >
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <Button disabled={isSubmitting} type='submit' className={classes.submit} variant="contained" color='primary' fullWidth >
                    Tao tai khoan
                </Button>
            </form>

        </div>
    );
}

export default RegisterForm;