import React from 'react';
import { View, Text } from 'react-native';
import { withTranslation } from 'react-i18next';


class App extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <View>
                <Text>{t('test')}</Text>
            </View>
        )
    }
}

export default withTranslation()(App);