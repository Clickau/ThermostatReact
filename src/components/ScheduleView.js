import React from 'react';
import { Text, View } from 'react-native';
import { withTranslation } from 'react-i18next';

import { ShortWeekdayNames } from '../Utils';

class ScheduleView extends React.Component {
    state = {
        schedule: this.props.schedule
    }

    render() {
        const t = this.props.t;
        const schedule = this.state.schedule;

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
            <View style={{
                marginTop: 20,
                marginHorizontal: 20,
                padding: 20,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'lightgray',
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        fontSize: 34,
                        color: 'dimgray',
                    }}>
                        {schedule.setTemp.toLocaleString()}°C
                    </Text>
                    <Text>{t('schedule:' + schedule.repeat)}</Text>
                </View>
                <Text>
                    {t('schedule:Start')}: {format.format(schedule.startDate)}
                </Text>
                <Text>
                    {t('schedule:End')}: {format.format(schedule.endDate)}
                </Text>
                {schedule.weekdays &&
                    <Text>
                        {t('schedule:On')}: {schedule.weekdays.map(el => ShortWeekdayNames[el - 1]).join(", ")}
                    </Text>
                }
            </View>
        )
    }
}

export default withTranslation()(ScheduleView);