import React from 'react'
import {View, Text} from 'react-native'


import {styles} from './styles'
import {Schedule,SchedObjct} from '../Schedule/index'

type Props = {
    data:SchedObjct;
    month: string;
    year: string;
}

export function SchedGroup ({data,month,year}:Props) {

    return(
        <View>
            <Text>
                
            </Text>
            <Schedule data={data}/>

        </View>
    )
}