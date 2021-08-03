import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

import { ShortWeekdayNames } from '../Utils';
import ThemedText from './ThemedText';

class ScheduleView extends React.Component {
    render() {
        const t = this.props.t;
        const { dark, colors } = this.props.theme;
        const schedule = this.props.schedule;

        const fullDateFormat = new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        const timeFormat = new Intl.DateTimeFormat(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        });

        const format = schedule.repeat === 'Once' ? fullDateFormat : timeFormat;

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    padding: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: colors.border,
                    backgroundColor: colors.card,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            color: dark ? colors.text : '#696969',
                            fontSize: 34,
                        }}>
                            {schedule.setTemp.toLocaleString()}°C
                        </Text>
                        <ThemedText>{t('schedule:' + schedule.repeat)}</ThemedText>
                    </View>
                    <ThemedText>
                        {t('schedule:Start')}: {format.format(schedule.startDate)}
                    </ThemedText>
                    <ThemedText>
                        {t('schedule:End')}: {format.format(schedule.endDate)}
                    </ThemedText>
                    {schedule.weekdays &&
                        <ThemedText>
                            {t('schedule:On')}: {schedule.weekdays.map(el => ShortWeekdayNames[el - 1]).join(", ")}
                        </ThemedText>
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

export default (props) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return <ScheduleView {...props} t={t} i18n={i18n} theme={theme} />
}