import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from './ThemedText';

export default function IconButton(props) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
        }}>
            <Icon name={props.iconName} color={colors.icon} size={26} style={{
                marginLeft: 10,
            }} />
            <ThemedText style={[props.textStyle, {
                marginLeft: 20,
            }]}>{props.text}</ThemedText>
        </TouchableOpacity>
    )
}