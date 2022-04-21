import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Text    
} from 'react-native';

import { NewsIcon } from '../NewsIcon';
import {styles} from './styles'

export type NewsProps = {
    id: string;
    name:string;
    icon: string | null;
    message: string;
}

type Props = TouchableOpacityProps &{
    data: NewsProps;

}

export function News({data, ...rest}:Props){

    return (

        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.2}
        {...rest}
        > 
         <NewsIcon newsId={data.id} iconId={data.icon}/>

         <View style={styles.content}>
             <Text style={styles.title}>
                 {data.name}
             </Text>
             <Text style={styles.message}>
                 {data.message}
             </Text>
         </View>        
        </TouchableOpacity>
    )
}