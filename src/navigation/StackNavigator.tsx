import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, SignUp, Home } from '../screens';
import { RootStackParamList } from "./types"


const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: 'Home',
                        headerTitleStyle: { fontSize: 20 },
                    }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerTitle: 'Sign Up',
                        headerTitleStyle: { fontSize: 20 },
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerTitle: 'Login',
                        headerTitleStyle: { fontSize: 20 },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
