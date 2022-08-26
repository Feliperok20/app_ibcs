import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native';


import { theme } from '../../global/styles/theme';
import   illustrationImg  from '../../assets/illustration.png';
import icon_header from '../../assets/icon_header.png';
import icon_white from '../../assets/icon_white.png';
 import { styles } from './styles';


export function Header (){
    const {header0, header100} = theme.colors

    return(
        <LinearGradient style={styles.container}
        colors={[ header0, header100]}
        >
        <Image 
        source={icon_header}
        style={styles.image}
        //resizeMode="center"
        />
        </LinearGradient>

    )

}