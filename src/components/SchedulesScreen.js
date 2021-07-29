import React from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ScheduleView from './ScheduleView';
import fetchDummyData from '../DummyData';
import AddScheduleButton from './AddScheduleButton';

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
                    renderItem={({ item }) => <ScheduleView schedule={item} />}
                    keyExtractor={item => `${item.setTemp}_${item.repeat}_${item.weekdays}_${item.startDate}_${item.endDate}`}
                    showsVerticalScrollIndicator={false}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={AddScheduleButton} />
            </View>
        )
    }

    componentDidMount() {
        this.onRefresh();
    }

    onRefresh() {
        this.setState({ refreshing: true });
        fetchDummyData().then(data => this.setState({ refreshing: false, schedules: data }));
    }
}

export default (props) => {
    const theme = useTheme();

    return <SchedulesScreen {...props} theme={theme} />
}