import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from './ThemedText';

export default function IconButton({ iconName, text, textStyle, onPress }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
        }}>
            <Icon name={iconName} color={colors.icon} size={26} style={{
                marginLeft: 10,
            }} />
            <ThemedText style={[textStyle, {
                marginLeft: 20,
            }]}>{text}</ThemedText>
        </TouchableOpacity>
    )
}