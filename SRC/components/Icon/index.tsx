import React, {useState, ReactNode} from 'react';
import {
     View,
     Text,
     TouchableOpacity
    
    } from 'react-native';
import {AntDesign,FontAwesome5,MaterialIcons } from '@expo/vector-icons'



import { styles } from './styles';


type Props = {
    title : string;
    children: ReactNode;

}

export function Icon({title,children}: Props){
    const [image, setImage] = useState<Props>({} as Props);
 
    
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.image}>
                {children}
            </View>
            <Text style={styles.text}>
                {title}
            </Text>

        </TouchableOpacity>

    );
}