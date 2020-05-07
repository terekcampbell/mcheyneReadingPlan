import React from 'react';
import { View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';


// const TabIcon = (props) => (
//     <Ionicons
//         name={'md-home'}
//         size={35}
//         color={props.focused ? 'grey' : 'darkgrey'}
//     />
// );

export default function ScreenOne() {

    // static navigationOptions = {
    //     tabBarIcon: TabIcon
    // };

    const dayOfYear = moment().dayOfYear();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#76C4AE',
                backgroundColor: '#7CE0F9',
            }}>
            <Text
                style={{
                    fontSize: 20,
                }}>
                Day Number Of Year:
            </Text>

            <Text
                style={{
                    fontSize: 80,
                }}>
                {dayOfYear}
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