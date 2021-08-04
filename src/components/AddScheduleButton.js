import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddScheduleButton({ onPress }) {
    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <TouchableOpacity
            style={{
                marginTop: 20,
                marginHorizontal: 20,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: colors.border,
                flexDirection: 'row',
                backgroundColor: colors.card,
            }}
            onPress={onPress} >
            <Icon name='add' color={colors.primary} size={20} style={{
                marginRight: 'auto',
            }} />
            <Text style={{
                color: colors.primary,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginRight: 'auto',
            }}>
                {t('Add Schedule')}
            </Text>
        </TouchableOpacity>
    )
}