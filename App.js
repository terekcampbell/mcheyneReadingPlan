/*This is an example of React Native Get Current Date Time*/
import React from "react";
import { View, Text } from 'react-native';
import moment from 'moment';

export default function App() {
    const dayOfYear = moment().dayOfYear();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
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