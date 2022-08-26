import React, {useState} from "react";
import {
    View,
    Text, 
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles'

export type SchedObjct = {
    id: number,
    day:number,
    mounth:number,
    year:number,
    title:string,
    message:string,
}

type Props = TouchableOpacityProps &{
    data: SchedObjct;

}

export function Schedule ({data,...rest}:Props) {

    return (
        <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.5}
        {...rest}
        >
            <View style={styles.containerSched}>
                <View style={styles.icon}>
                    <Text style={styles.number}>
                        {data.day}
                    </Text>
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.text}>
                        {data.title}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>


    )

}