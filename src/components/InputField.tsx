import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
    label: string;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, error ? styles.errorInput : null]}
                placeholderTextColor="#999"
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
    },
    errorInput: {
        borderColor: '#ff4d4d',
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: '#ff4d4d',
    },
});

export default InputField;
