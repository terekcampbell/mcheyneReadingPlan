/*This is an example of React Native Get Current Date Time*/
import React from "react";
import { View, Text } from 'react-native';
import moment from 'moment';
import { createTopTabNavigator } from 'react-navigation';
import AppNavigator from "./src/navigation/AppNavigator";


export default function App() {

    return (
        <AppNavigator />
    );
    // const AppTabNavigator = createTopTabNavigator({
    //     App: ScreenOne,
    //     Settings: ScreenTwo,
    // });
    //
    // const dayOfYear = moment().dayOfYear();
    // const weekOfYear = moment().week();
    // return (
    //     <View
    //         style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             // backgroundColor: '#76C4AE',
    //             backgroundColor: '#7CE0F9',
    //         }}>
    //         <Text
    //             style={{
    //                 fontSize: 20,
    //             }}>
    //             Day Number Of Year:
    //         </Text>
    //
    //         <Text
    //             style={{
    //                 fontSize: 80,
    //             }}>
    //             {dayOfYear}
    //         </Text>
    //
    //         <Text
    //             style={{
    //                 fontSize: 20,
    //                 marginTop: '20%',
    //             }}>
    //             Week Number Of Year:
    //         </Text>
    //
    //         <Text
    //             style={{
    //                 fontSize: 40,
    //             }}>
    //             {weekOfYear}
    //         </Text>
    //     </View>
    // );
}