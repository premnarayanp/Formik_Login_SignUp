export type RootStackParamList = {
    SignUp: undefined;
    Login: undefined;
    Home: { user: { name: string; isLogin: boolean } };
};