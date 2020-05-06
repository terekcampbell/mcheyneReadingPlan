import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DayOfYear from "../screens/DayOfYear";
import WeekOfYear from "../screens/WeekOfYear";


const BottomTabNavigator = createBottomTabNavigator({
    One: DayOfYear,
    Two: WeekOfYear
}, {
    tabBarOptions: {
        showLabel: false
    }
});

export default BottomTabNavigator;


