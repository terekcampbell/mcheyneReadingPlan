import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenName from '../components/ScreenName.js'


const TabIcon = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
);

export default class ScreenOne extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    render() {
        return (
            <View style={styles.container}>
                <ScreenName name={'Day Of Year'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});