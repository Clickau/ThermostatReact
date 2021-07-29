import React from 'react';
import { withTranslation } from 'react-i18next';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AddScheduleButton extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <TouchableOpacity style={{
                marginTop: 20,
                marginHorizontal: 20,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'lightgray',
                flexDirection: 'row',
            }}>
                <Icon name='add' color='teal' size={20} style={{
                    marginRight: 'auto',
                }} />
                <Text style={{
                    color: 'teal',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginRight: 'auto',
                }}>
                    {t('schedulesScreen:Add Schedule')}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default withTranslation()(AddScheduleButton);