import React from "react";
import { View, Image } from "react-native";

import {styles} from './styles';

type Props = {
    newsId: string;
    iconId: string | null;
}

export function NewsIcon({newsId, iconId}: Props) {

    const uri ="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/7241607/7241607-1626532566531-95b1c13e1f714.jpg"
    
    return(

        <View style={styles.container}>
            {   iconId?
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