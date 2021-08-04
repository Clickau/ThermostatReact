import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

import { getShortWeekdayNames } from '../Utils';
import ThemedText from './ThemedText';

export default function ScheduleView({ schedule, onPress }) {
    const { t } = useTranslation();
    const { dark, colors } = useTheme();

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
        <TouchableOpacity onPress={onPress}>
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
                        {t('schedule:On')}: {schedule.weekdays.map(el => getShortWeekdayNames()[el - 1]).join(", ")}
                    </ThemedText>
                }
            </View>
        </TouchableOpacity>
    )
}