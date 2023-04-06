import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Box, Button, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/formControl/InputField';
import PasswordField from '../../../../components/formControl/PasswordField';
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LinearProgress from '@mui/material/LinearProgress';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Vui lòng nhập họ tên')
            .test('Should has at least two words.', 'Vui lòng nhập họ và tên', value => {
                return value.split(' ').length >= 2;
            }),

        email: yup.string()
            .required('Vui lòng nhập email')
            .email('Vui lòng nhập email'),

        password: yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(6, 'Vui lòng nhập mật khẩu trên 6 kí tự'),

        retypePassword: yup.string()
            .required('Vui lòng nhập mật khẩu')
            .oneOf([yup.ref('password')], ('mật khẩu không khớp'))
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
        <Box >
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
                    <AcUnitIcon  color="primary" />
                </Avatar>
                <br></br>
                <Typography component="h3" variant="h5">
                    Nhập thông tin
                </Typography>
            </Box>

            <form onSubmit={form.handleSubmit(handleSubmit)} >
                <InputField name="fullName" label="Họ và tên" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Mật khẩu" form={form} />
                <PasswordField name="retypePassword" label="Nhập lại mật khẩu" form={form} />
                {/* disabled={isSubmitting} */}
                <Button disabled={isSubmitting} type='submit' variant="contained" color='primary' fullWidth >
                    Tạo tài khoản
                </Button>
            </form>

        </Box>
    );
}

export default RegisterForm;