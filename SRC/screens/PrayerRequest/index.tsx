import React from "react";
import { 
    View,
    Text,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import { Header } from "../../components/Header";

import {ImputGeneric } from "../../components/ImputGeneric";
import {ImputPhone } from "../../components/ImputPhone";
import {ImputEmail } from "../../components/ImputEmail";
import { TextArea } from "../../components/TextArea";
import {styles} from './styles';
import { Button } from "../../components/Button";


export function PrayerRequest(){

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == 'ios'? 'padding': 'height'}
        style={styles.container}
        >
            <Header/>
            <ScrollView>
                <View style={styles.containertext}>
                    <View style={styles.label}>
                        <Text style={styles.title}>
                            Descrição
                        </Text>
                    </View>

                    <ImputGeneric
                    message="Escreva a descrição"
                    maxLength={100}
                    autoCorrect={false}
                    selectionColor={"white"}
                    
                    />

                    <View style={styles.label}>
                        <Text style={styles.title}>
                            Nome Completo
                        </Text>
                    </View>

                    <ImputGeneric
                    message="Escreva o seu nome completo"
                    maxLength = {100}
                    autoCorrect={false}
                    selectionColor={"white"}
                    />

                     <View style={styles.label}>
                        <Text style={styles.title}>
                            E-Mail
                        </Text>
                    </View>

                    <ImputEmail
                    maxLength={100}
                    autoCorrect={false}
                    selectionColor={"white"}                   
                    />

                     <View style={styles.label}>
                        <Text style={styles.title}>
                            Numero de Telefone
                        </Text>
                    </View>

                    <ImputPhone
                    maxLength={20}
                    autoCorrect={false}
                    selectionColor={"white"}
                    />

                    <View style={styles.label}>
                        <Text style={styles.title}>
                            Oração
                        </Text>
                    </View>

                    <TextArea
                    multiline
                    maxLength={100}
                    numberOfLines={10}
                    autoCorrect={false}
                    selectionColor={"white"}
                    />

                    <View style={styles.footer}>
                        <Button 
                            title='Enviar'
                            />
                    </View>



                </View>
            </ScrollView>




        </KeyboardAvoidingView>

    )
}