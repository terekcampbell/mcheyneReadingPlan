import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

// const TabIcon = (props) => (
//     <Ionicons
//         name={'md-apps'}
//         size={35}
//         color={props.focused ? 'grey' : 'darkgrey'}
//     />
// );

export default function ScreenTwo() {

    // static navigationOptions = {
    //     tabBarIcon: TabIcon
    // };

    const weekOfYear = moment().week();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#76C4AE',
                // backgroundColor: '#7CE0F9',
            }}>
            <Text
                style={{
                    fontSize: 20,
                }}>
                Week Number Of Year:
            </Text>

            <Text
                style={{
                    fontSize: 80,
                }}>
                {weekOfYear}
            </Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });