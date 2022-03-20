import React from 'react';
import {
     View,
     Text,    
} from 'react-native';
import {AntDesign,FontAwesome5,MaterialIcons } from '@expo/vector-icons'
// Leitura = book, calendario =  calendar , pedidos = pray, coracao = heart, live = live-tv    (size 24)


import { styles } from './styles'
import { Header } from '../../components/Header'
import { Icon } from '../../components/Icon'
import { theme } from '../../global/styles/theme'
    export function ListIcons () {

        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <Icon title= "Leitura" >
                        <AntDesign
                            name= "book"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Agenda" >
                        <AntDesign
                            name= "calendar"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Oferta" >
                        <AntDesign
                            name= "hearto"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                </View>
                
                <View style={styles.icons}>
                    <Icon title= "Live" >
                        <MaterialIcons
                            name= "live-tv"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Pedidos" >
                        <FontAwesome5
                            name= "pray"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                        <Icon title= "" >
                    </Icon>
                </View>

            </View>   
        );
    }