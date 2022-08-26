import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Text    
} from 'react-native';

import { OfferIcon } from '../OfferIcon';
import {styles} from './styles'

export type OfferProps = {
    id: string;
    name:string;
    icon: string | null ;
    message: string;
}

type Props = TouchableOpacityProps &{
    data: OfferProps;

}

export function Offer({data, ...rest}:Props){

    return (

        <TouchableOpacity 
            style={styles.container}
            activeOpacity={1}
             {...rest}
        > 
        <View style={styles.titleIcon}>
            <Text style={styles.title}>
                {data.name}
            </Text>
            <OfferIcon  offerId={data.id} iconId={data.icon} />
        </View>
        <View style={styles.content}>    
            <Text style={styles.message}>
                {data.message}
            </Text>
        </View>        
        </TouchableOpacity>
    )
}