import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Appearance } from 'react-native';

import SchedulesScreen from './components/SchedulesScreen';

export default class App extends React.Component {
    render() {
        const colorScheme = Appearance.getColorScheme();
        const theme = colorScheme === 'dark' ? themes.dark : themes.light;

        return (
            <NavigationContainer theme={theme}>
                <SchedulesScreen />
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