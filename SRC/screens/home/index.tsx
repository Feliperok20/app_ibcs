import React, {useState, useEffect } from 'react'
import { View,FlatList } from 'react-native'


import { styles } from './styles'
import { Header } from '../../components/Header'
import { ListIcons } from '../../components/ListIcons'
import { News, NewsProps } from '../../components/News'
import { Load } from '../../components/Load'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'



export function Home () {

    const list = [
        {
            id: '1',
            name: 'Viver em Cristo',
            icon: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2016/11/formacao_a-nossa-vida-pode-ser-transformada-pela-fe.jpg',
            message: ' Testo Bíblico: Jó 14:9 | Coríntio 11:28'
        },
        {
            id: '2',
            name: 'Batismo',
            icon: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2016/11/formacao_a-nossa-vida-pode-ser-transformada-pela-fe.jpg',
            message: ' 22/04/2021 as 18:00h'
        },
        {
            id: '3',
            name: 'Campanha',
            icon: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2016/11/formacao_a-nossa-vida-pode-ser-transformada-pela-fe.jpg',
            message: ' 22/04/2021 as 18:00h'
        }
    ];
   

    return(
        <View style={styles.container}>
            <View>
            <Header/>
            </View>
            <ListIcons/>
            <View  style={styles.containerNews}>

            <ListHeader
                    title="Notícias"
                    subtitle={`Total ${list.length}`}
                />  
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                        <News
                            data={item}
                         />
                    )}
                    ItemSeparatorComponent={()=> <ListDivider isCentered/> } 
                    showsVerticalScrollIndicator={false}
                    style={styles.news}
                    //ListHeaderComponent={() => <ListDivider isCentered />}  
                />
            </View>
        </View>
    )

}