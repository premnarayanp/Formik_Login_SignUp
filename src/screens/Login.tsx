import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { InputField, CustomsButton } from '../components/index';
import { LoginSchema } from '../yupSchemas/LoginSchema'; // Assuming you have a LoginSchema for validation
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                alert('Login Successful');
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>

                    <InputField
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={touched.email && errors.email ? errors.email : undefined} // Ensuring type compatibility
                    />

                    <InputField
                        label="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        error={touched.password && errors.password ? errors.password : undefined} // Ensuring type compatibility
                    />

                    <CustomsButton onPress={handleSubmit} title="Login" />

                    {/* Navigation to SignUp */}
                    <View style={styles.goSignUpContainer}>
                        <Text style={styles.newUserText}>
                            If you are new,{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.goSignUpButtonText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    goSignUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },

    newUserText: {
        fontSize: 14,
        color: '#666',
    },

    goSignUpButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});
