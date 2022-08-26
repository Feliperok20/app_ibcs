import React from 'react'
import { View,FlatList,Image  } from 'react-native'


import { styles } from './styles'
import { Header } from '../../components/Header'
import { ListIcons } from '../../components/ListIcons'
import { News, NewsProps } from '../../components/News'
import { Load } from '../../components/Load'
import  fe   from '../../assets/fe.png';
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import {Offer, OfferProps} from '../../components/Offer'



export function Help () {

    const list = [
        {
            id: '1',
            name: 'Modo de pagamento ',
            icon: "1",
            message: 'Detalhes dos dados '
        },
        {
            id: '2',
            name: 'Modo de pagamento ',
            icon: "1",
            message: 'Detalhes dos dados '
        },
        {
            id: '3',
            name: 'Modo de pagamento ',
            icon: "1",
            message: 'Detalhes dos dados '
        },
        {
            id: '4',
            name: 'Modo de pagamento ',
            icon: "1",
            message: 'Detalhes dos dados '
        }

    ];
   

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.imageContainer}>
                <Image 
                    source={fe}
                    style={styles.image}
                    
                    />
            </View>
            <View  style={styles.containerOffer}>
                <ListHeader
                        title="Modos para ofertar"
                    />  
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                        <Offer
                            data={item}
                         />
                    )}
                    ItemSeparatorComponent={()=> <ListDivider isCentered/> } 
                    showsVerticalScrollIndicator={false}
                    style={styles.offer}
                    //ListHeaderComponent={() => <ListDivider isCentered />}  
                />
            </View>
        </View>
    )

}