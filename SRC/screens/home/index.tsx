import React from 'react'
import { View } from 'react-native'


import { styles } from './styles'
import { Header } from '../../components/Header'
import { ListIcons } from '../../components/ListIcons'

export function Home () {
    return(
        <View style={styles.container}>
            <View>
            <Header/>
            </View>

           <ListIcons/>


        </View>
    )

}