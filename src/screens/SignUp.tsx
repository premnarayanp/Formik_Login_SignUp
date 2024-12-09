import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { SignUpSchema } from '../yupSchemas/SignUpSchema';
import { InputField, CustomsButton } from '../components/index';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen: React.FC = () => {
    const [passwordStrength, setPasswordStrength] = useState('No');
    const navigation = useNavigation();

    const determinePasswordStrength = (password: string): string => {
        const length = password.length;
        if (length === 0) return '';
        if (length < 6) return 'Weak';
        if (length < 10) return 'Moderate';
        return 'Strong';
    };

    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
                alert('Sign Up Successful');
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>
                    <InputField
                        label="Full Name"
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        error={touched.fullName && errors.fullName || undefined}
                    />
                    <InputField
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={touched.email && errors.email || undefined}
                    />
                    <InputField
                        label="Password"
                        onChangeText={(text) => {
                            handleChange('password')(text);
                            setPasswordStrength(determinePasswordStrength(text));
                        }}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        error={touched.password && errors.password || undefined}
                    />
                    <Text style={styles.passwordStrength}>
                        Password Strength: {passwordStrength}
                    </Text>
                    <InputField
                        label="Confirm Password"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry
                        error={touched.confirmPassword && errors.confirmPassword || undefined}
                    />
                    <CustomsButton onPress={handleSubmit} title="Sign Up" />

                    {/* Navigation to Login */}
                    <View style={styles.goLoginContainer}>
                        <Text style={styles.alreadyRegisteredText}>
                            If you already have an account,{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.goLoginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
};

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
    passwordStrength: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green',
    },
    goLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    alreadyRegisteredText: {
        fontSize: 14,
        color: '#666',
    },
    goLoginButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});

export default SignUpScreen;
