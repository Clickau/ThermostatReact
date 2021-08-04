import React from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ScheduleView from './ScheduleView';
import fetchDummyData from '../DummyData';
import AddScheduleButton from './AddScheduleButton';
import { useTranslation } from 'react-i18next';

class SchedulesScreen extends React.Component {
    state = {
        schedules: null,
        refreshing: false,
    }

    render() {
        const { colors } = this.props.theme;

        return (
            <View style={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'center',
                backgroundColor: colors.background,
            }}>
                <FlatList
                    data={this.state.schedules}
                    renderItem={({ item, index }) => <ScheduleView schedule={item} onPress={this.onPressSchedule.bind(this, index)} />}
                    keyExtractor={item => `${item.setTemp}_${item.repeat}_${item.weekdays}_${item.startDate}_${item.endDate}`}
                    showsVerticalScrollIndicator={false}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={<AddScheduleButton onPress={this.onPressAddSchedule.bind(this)} />} />
            </View>
        )
    }

    componentDidMount() {
        const t = this.props.t;
        this.props.navigation.setOptions({ title: t('Schedules') });
        this.onRefresh();
    }

    onRefresh() {
        this.setState({ refreshing: true });
        fetchDummyData().then(data => this.setState({ refreshing: false, schedules: data }));
    }

    onPressAddSchedule() {
        this.props.navigation.navigate('ModifySchedule', { action: 'Add' });
    }

    onPressSchedule(index) {
        this.props.navigation.navigate('ModifySchedule', { action: 'Modify', schedule: JSON.stringify(this.state.schedules[index]), index: index });
    }
}

export default (props) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    return <SchedulesScreen {...props} t={t} i18n={i18n} theme={theme} />
}