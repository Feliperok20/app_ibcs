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
                    <Icon title= "Leitura" navigate='help' >
                        <AntDesign
                            name= "book"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Agenda" navigate='events' >
                        <AntDesign
                            name= "calendar"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Oferta" navigate='help' >
                        <AntDesign
                            name= "hearto"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                </View>
                
                <View style={styles.icons}>
                    <Icon title= "Live" navigate='help'>
                        <MaterialIcons
                            name= "live-tv"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                    <Icon title= "Pedidos" navigate='prayerRequest' >
                        <FontAwesome5
                            name= "pray"
                            size={55}
                            color={theme.colors.icon}
                        />
                    </Icon>
                        <Icon title= "" navigate='help' >
                    </Icon>
                </View>

            </View>   
        );
    }