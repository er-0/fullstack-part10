import Text from './Text';
import theme from '../theme';

import { Pressable, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must have 3 characters or more')
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password must have 5 characters or more')
      .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
    return (
      <View margin={10}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Pressable marginTop={10} onPress={onSubmit}>
          <Text style={theme.bubble}>Sign in</Text>
        </Pressable>
      </View>
    );
  };

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
    const username = values.username;
    const password = values.password;
    console.log(`Logged in with: ${username} ${password}`);
  };

  return (
    <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;