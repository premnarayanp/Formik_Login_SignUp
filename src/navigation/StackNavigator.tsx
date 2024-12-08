import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, SignUp } from '../screens';

export type RootStackParamList = {
    SignUp: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
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
