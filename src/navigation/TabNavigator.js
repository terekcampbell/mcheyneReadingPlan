import React from 'react';
import DayOfYear from "../screens/DayOfYear";
import WeekOfYear from "../screens/WeekOfYear";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator style={{marginTop: 10}}>
                <Tab.Screen name="Day" component={DayOfYear} />
                <Tab.Screen name="Week" component={WeekOfYear} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}