import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';

export default function ThemedText(props) {
    const { colors } = useTheme();
    return (
        <Text {...props} style={[props.style, {
            color: colors.text,
        }]}>
            {props.children}
        </Text>
    )
}