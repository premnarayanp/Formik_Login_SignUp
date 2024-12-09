# React Native Auth App

A React Native application that implements user authentication with email suggestions using AsyncStorage. It features `SignUp`, `Login`, and a `Home` page with user-specific greetings.

## Features

1. **SignUp Page**:
   - New users can register with their details.
   - Email is saved to AsyncStorage after sign-up.
   - Navigates to the `Home` page after successful registration.

2. **Login Page**:
   - Existing users can log in with their email and password.
   - Previously saved email appears as a suggestion in the email field.
   - Navigates to the `Home` page after successful login.

3. **Home Page**:
   - Displays a personalized greeting:
     - `Welcome back [UserName]` if logged in.
     - `Welcome [UserName]` if just registered.

4. **AsyncStorage Integration**:
   - Stores the user's email to provide suggestions for future logins or sign-ups.

5. **Form Validation**:
   - Validates user inputs using `Formik` and `Yup`.

## Screens

- **SignUp**: For new user registration.
- **Login**: For existing users.
- **Home**: Personalized dashboard after login or sign-up.

## Tech Stack

- **React Native**: Frontend framework.
- **Formik & Yup**: Form handling and validation.
- **AsyncStorage**: Local storage for saving user email.

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install


Run the project:
bash
Copy code
npx react-native run-android
Use the app to sign up, log in, and navigate to the Home page.
Future Improvements
Add support for password reset.
Enhance validation for edge cases.
Implement token-based authentication for secure login.
Author
Developed by Premnarayan Patel.

arduino
Copy code

This keeps things short and focused while providing all the necessary details about the projec
