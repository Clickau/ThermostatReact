import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AddScheduleButton extends React.Component {
    render() {
        const { colors } = this.props.theme;

        const t = this.props.t;
        return (
            <TouchableOpacity style={{
                marginTop: 20,
                marginHorizontal: 20,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: colors.border,
                flexDirection: 'row',
                backgroundColor: colors.card,
            }}>
                <Icon name='add' color={colors.primary} size={20} style={{
                    marginRight: 'auto',
                }} />
                <Text style={{
                    color: colors.primary,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginRight: 'auto',
                }}>
                    {t('schedulesScreen:Add Schedule')}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default (props) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return <AddScheduleButton {...props} t={t} i18n={i18n} theme={theme} />
}