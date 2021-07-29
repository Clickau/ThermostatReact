import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';

class ThemedText extends React.Component {
    render() {
        const { colors } = this.props.theme;
        return (
            <Text {...this.props} style={[this.props.style, {
                color: colors.text,
            }]}>
                {this.props.children}
            </Text>
        )
    }
}

export default (props) => {
    const theme = useTheme();

    return <ThemedText {...props} theme={theme} />
}