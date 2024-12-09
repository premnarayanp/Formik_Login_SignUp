import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../navigation/types';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<HomeScreenRouteProp>();

    const user = route.params?.user; // Get the user from route params

    useEffect(() => {
        const checkUser = async () => {
            // Fetch user email or token from AsyncStorage
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if (!storedEmail || !user) {
                // Redirect to SignUp if no valid user is found
                navigation.navigate('SignUp');
            }
        };

        checkUser();
    }, [navigation, user]);

    if (!user) {
        // Show a loading indicator while redirecting
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                {user.isLogin
                    ? `Welcome back, ${user.name}!`
                    : `Welcome, ${user.name}!`}
            </Text>

            <View style={styles.goLoginSignUpContainer}>
                <TouchableOpacity style={styles.goLogiSignUpnButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.goLogiSignUpnButtonText}>Go SignUp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.goLogiSignUpnButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.goLogiSignUpnButtonText}>Go Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginBottom: 20,
    },
    goLoginSignUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 5,
        width: 350,
        borderRadius: 10
    },
    goLogiSignUpnButton: {
        color: '#007BFF',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: "green",
        padding: 5,
        borderRadius: 7
    },
    goLogiSignUpnButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});
