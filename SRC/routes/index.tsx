import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {Home} from '../screens/Home'
import {AppRoutes} from './app.routes'

export function Routes (){
    return(
        <NavigationContainer>
            {
                <AppRoutes/>
            }
        </NavigationContainer>
    )

}