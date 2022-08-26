import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../global/styles/theme';

import {Home} from '../screens/Home';
import {Help} from '../screens/Help';
import { PrayerRequest } from '../screens/PrayerRequest';
import { Events } from '../screens/Events';

const { Navigator, Screen} = createStackNavigator ();

export function AppRoutes(){
    return(

        <Navigator
             headerMode="none"
             screenOptions={{
                 cardStyle:{
                    backgroundColor: 'transparent'
            }
        }}
        >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="help"
                component={Help}
            />
            <Screen
                name="prayerRequest"
                component={PrayerRequest}
            />
            <Screen
                name="events"
                component={Events}
            />

        </Navigator>
    );

}