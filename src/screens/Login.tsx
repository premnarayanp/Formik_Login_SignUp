import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { LoginSchema } from '../yupSchemas/LoginSchema';
import { InputField, CustomsButton } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
    const [suggestedEmail, setSuggestedEmail] = useState('');

    const getSuggestedEmail = async (): Promise<string | null> => {
        try {
            const email = await AsyncStorage.getItem('userEmail');
            return email;
        } catch (error) {
            console.error('Error fetching suggested email:', error);
            return null;
        }
    };


    useEffect(() => {
        const fetchSuggestedEmail = async () => {
            const email = await getSuggestedEmail();
            if (email) setSuggestedEmail(email); // Update state
        };
        fetchSuggestedEmail();
    }, []);

    //console.log("suggestedEmail---", suggestedEmail);

    const handleLogin = async (values: { email: string }) => {
        await AsyncStorage.setItem('userEmail', values.email);
        const userData = { name: values.email, isLogin: true };
        navigation.navigate('Home', { user: userData });
    };

    return (
        <Formik
            initialValues={{
                email: suggestedEmail || '', // Auto-populate email
                password: '',
            }}
            enableReinitialize // Ensures form reinitializes when suggestedEmail changes
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <InputField
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={touched.email && errors.email || undefined}
                    />
                    <InputField
                        label="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        error={touched.password && errors.password || undefined}
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
