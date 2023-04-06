import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/formControl/InputField';
import PasswordField from '../../../../components/formControl/PasswordField';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    // const schema = yup.object().shape({
    //     fullname: yup.string()
    //     .required(' pls enter your full name')
    //     // .test('should has at least two work', ' pls enter at least two work.', values => {
    //     //     // console.log(value);
    //     //     return values.split(' ').length >= 2;
    //     // }), 
    // });     

    const schema = yup.object().shape({

        identifier: yup.string()
            .required('Vui lòng nhập email')
            .email('Vui lòng nhập email '),

        password: yup.string()
            .required('Vui lòng nhập mật khẩu')

    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
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
        <div >
            {isSubmitting &&
                <Box sx={{
                    width: '100%',
                    position: 'Absolute',
                }}>
                    <LinearProgress />
                </Box>
            }
            <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ margin: '0 auto' }} >
                    <PersonIcon color="primary" />
                </Avatar>
                <br></br>
                <Typography component="h3" variant="h5">
                    Nhập thông tin
                </Typography>
            </Box>
            <form onSubmit={form.handleSubmit(handleSubmit)} >

                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Mật khẩu" form={form} />

                <Button disabled={isSubmitting} type='submit' variant="contained" color='primary' fullWidth >
                    Đăng nhập
                </Button>
            </form>

        </div>
    );
}

export default LoginForm;