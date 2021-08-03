import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Appearance } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SchedulesScreen from './components/SchedulesScreen';
import ModifyScheduleScreen from './components/ModifyScheduleScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        const colorScheme = Appearance.getColorScheme();
        const theme = colorScheme === 'dark' ? themes.dark : themes.light;

        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: 'white',
                }}>
                    <Stack.Screen name='Schedules' component={SchedulesScreen} />
                    <Stack.Screen name='ModifySchedule' component={ModifyScheduleScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const themes = {
    light: {
        dark: false,
        colors: {
            primary: '#008080',
            background: 'white',
            card: 'white',
            text: 'black',
            border: '#d3d3d3',
        }
    },
    dark: {
        dark: true,
        colors: {
            primary: '#008080',
            background: 'black',
            card: '#141414',
            text: 'white',
            border: '#404040',
        }
    }
}