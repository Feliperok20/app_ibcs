import uuid from 'react-native-uuid';
import React, {Children, useState, } from 'react';
import { View, ScrollView, FlatList,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';
import { Header } from '../../components/Header';
import {Schedule, SchedObjct} from '../../components/Schedule';
import { ListDivider } from '../../components/ListDivider';



export function Events (){
const [dataJan, setDataJan] =  useState<SchedObjct[]>([])
const [dataFev, setDataFev] =  useState<SchedObjct[]>([])
const [dataMar, setDataMar] =  useState<SchedObjct[]>([])
const [dataAbr, setDataAbr] =  useState<SchedObjct[]>([])
const [dataMai, setDataMai] =  useState<SchedObjct[]>([])
const [dataJun, setDataJun] =  useState<SchedObjct[]>([])
const [dataJul, setDataJul] =  useState<SchedObjct[]>([])
const [dataAgo, setDataAgo] =  useState<SchedObjct[]>([])
const [dataSet, setDataSet] =  useState<SchedObjct[]>([])
const [dataOut, setDataOut] =  useState<SchedObjct[]>([])
const [dataNov, setDataNov] =  useState<SchedObjct[]>([])
const [dataDez, setDataDez] =  useState<SchedObjct[]>([])

const list = [
    {
        id:1,
        day:22,
        mounth: 1,
        year:2022,
        title:"Batismo",
        message:"Texto",
    },
    {
        id:2,
        day:28,
        mounth: 1,
        year:2022,
        title:"Curso de Casais Vencedores",
        message:"Texto",
    },
    
];


    return(
        <View style={styles.container}>
             <View>
                <Header/>
            </View>
            <ScrollView style={styles.list}> 

                <Text style={styles.title}>
                    Janeiro/2022
                </Text>
                <ListDivider isCentered={true}/>
                <View style={styles.schedule}>
                {
                list.map((item)=> <Schedule data={item} key={item.id}/>)
                }
                </View>
                <Text style={styles.title}>
                    Fevereiro/2022
                </Text>
                <ListDivider/>
                <Text style={styles.title}>
                    Março/2022
                </Text>
                <ListDivider/>
             

            </ScrollView>
        </View>
    )}


   


