import React from 'react'
import { TextInput, TextInputProps} from 'react-native'

import {styles} from './styles'
import {theme} from '../../global/styles/theme';

type Props = TextInputProps& {
message: string;

} 

export function ImputGeneric ({message, ...rest}:Props){
    const colorHolder = theme.colors.highlight
    return(
        <TextInput
        placeholder = {message}
        placeholderTextColor={colorHolder}
        style={styles.container}
        {...rest}
        />
    );
}