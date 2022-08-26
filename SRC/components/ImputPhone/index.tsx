import React from 'react'
import { TextInput, TextInputProps} from 'react-native'

import {styles} from './styles'
import {theme} from '../../global/styles/theme';

export function ImputPhone ({...rest}:TextInputProps){
    const colorHolder = theme.colors.highlight
    return(
        <TextInput
        placeholder='Excreva o seu Telefone...'
        placeholderTextColor={colorHolder}
        style={styles.container}
        keyboardType='phone-pad'
        {...rest}
        />
    );
}