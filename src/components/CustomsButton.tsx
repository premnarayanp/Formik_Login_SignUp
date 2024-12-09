import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator, ViewStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}

const CustomsButton: React.FC<ButtonProps> = ({ title, onPress, loading, disabled, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, disabled ? styles.disabledButton : null, style]}
            disabled={loading || disabled}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});

export default CustomsButton;
