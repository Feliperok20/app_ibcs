import React from 'react'
import { TextInput, TextInputProps} from 'react-native'

import {styles} from './styles'
import {theme} from '../../global/styles/theme';

export function ImputEmail ({...rest}:TextInputProps){
    const colorHolder = theme.colors.heading
    return(
        <TextInput
        placeholder='Excreva o seu E-Mail...'
        placeholderTextColor={colorHolder}
        style={styles.container}
        keyboardType='email-address'
        {...rest}
        />
    );
}