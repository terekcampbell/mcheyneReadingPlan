import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';


export default function ScreenOne() {

    const dayOfYear = moment().dayOfYear();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
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
