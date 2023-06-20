import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    username: Yup.string().required('Username is Required!'),
    password: Yup.string().required('Password is Required!')
});