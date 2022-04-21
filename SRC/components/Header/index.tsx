import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native';


import { theme } from '../../global/styles/theme';
import   illustrationImg  from '../../assets/illustration.png';
import icon_whiteImg from '../../assets/icon_white.png'
 import { styles } from './styles';


export function Header (){
    const {header0, header100} = theme.colors

    return(
        <LinearGradient style={styles.container}
        colors={[ header0, header100]}
        >
        <Image 
        source={icon_whiteImg}
        style={styles.image}
        //resizeMode="center"
        />
        </LinearGradient>

    )

}