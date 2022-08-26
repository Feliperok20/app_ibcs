import React from "react";
import { View, Image } from "react-native";

import {styles} from './styles';
import {image1} from '../../assets/image1.png'
import {image2} from '../../assets/image2.png'
import {image3} from '../../assets/image3.png'
import {image4} from '../../assets/image4.png'

type Props = {
    offerId: string;
    iconId : string| null;
}

export function OfferIcon({ offerId, iconId}: Props) {

    const uri ="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/7241607/7241607-1626532566531-95b1c13e1f714.jpg"


    
    
    return(

        <View style={styles.container}>
           { iconId?
            //aqui será colocado a imagem que virá da API
                <Image
                    source={{uri}}
                    style={styles.image}
                    resizeMode="cover"
                />:
                <Image
                    source={{uri}}
                    style={styles.image}
                    resizeMode="cover"
                />
}
        </View>

    )

}