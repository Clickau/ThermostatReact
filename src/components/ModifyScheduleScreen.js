import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getWeekdayInitials } from '../Utils';
import IconButton from './IconButton';
import ThemedText from './ThemedText';

class ModifyScheduleScreen extends React.Component {
    render() {
        const { colors } = this.props.theme;
        const t = this.props.t;
        return (
            <View style={{
                flex: 1,
                alignItems: 'stretch',
                backgroundColor: colors.background,
            }}>
                <IconButton iconName='thermometer' text={this.state.schedule.setTemp.toLocaleString() + '°C'} textStyle={{
                    fontSize: 26,
                }} />
                <IconButton iconName='repeat' text={t('schedule:' + this.state.schedule.repeat)} textStyle={{
                    fontSize: 18,
                }} />
                {this.state.schedule.repeat === 'Weekly' &&
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        paddingVertical: 10,
                    }}>
                        {
                            getWeekdayInitials().map((letter, index) => (
                                <TouchableWithoutFeedback key={index}>
                                    <View style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 36/2,
                                        backgroundColor: colors.primary,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                        }}>
                                            {letter}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </View>
                }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <IconButton iconName='clock-outline' text={timeFormat.format(this.state.schedule.startDate)} textStyle={{
                        fontSize: 18,
                    }} />
                    {this.state.schedule.repeat === 'Once' &&
                        <TouchableOpacity style={{
                            marginLeft: 'auto',
                            paddingRight: 10,
                        }}>
                            <ThemedText style={{
                                fontSize: 18,
                            }}>
                                {dateFormat.format(this.state.schedule.startDate)}
                            </ThemedText>
                        </TouchableOpacity>
                    }
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingLeft: 56,
                    }}>
                        <ThemedText style={{
                            fontSize: 18,
                        }}>
                            {timeFormat.format(this.state.schedule.endDate)}
                        </ThemedText>
                    </TouchableOpacity>
                    {this.state.schedule.repeat === 'Once' &&
                        <TouchableOpacity style={{
                            marginLeft: 'auto',
                            paddingRight: 10,
                        }}>
                            <ThemedText style={{
                                fontSize: 18,
                            }}>
                                {dateFormat.format(this.state.schedule.endDate)}
                            </ThemedText>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }

    componentDidMount() {
        const t = this.props.t;
        this.props.navigation.setOptions({ title: t(`${this.props.route.params.action} Schedule`) });
    }

    constructor(props) {
        super(props);
        let schedule;
        if (props.route.params.action === 'Modify') {
            schedule = JSON.parse(props.route.params.schedule);
            schedule.startDate = new Date(schedule.startDate);
            schedule.endDate = new Date(schedule.endDate);
        }
        else
            schedule = defaultSchedule;

        this.state = {
            schedule: schedule,
        };
    }
}

export default (props) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return <ModifyScheduleScreen {...props} t={t} i18n={i18n} theme={theme} />
}

const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
});

const dateFormat = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
});

const defaultSchedule = {
    repeat: 'Daily',
    setTemp: 20,
    startDate: new Date(1970, 0, 1, 8),
    endDate: new Date(1970, 0, 1, 20),
};