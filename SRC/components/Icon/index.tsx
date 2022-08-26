import React, {useState, ReactNode} from 'react';
import {
     View,
     Text,
     TouchableOpacity, TouchableOpacityProps
    
    } from 'react-native';
import {AntDesign,FontAwesome5,MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import { styles } from './styles';


type Props = {
    title : string;
    children: ReactNode;
    navigate: string;

}

export function Icon({title,children,navigate}: Props, {...rest}: TouchableOpacityProps){
    const [image, setImage] = useState<Props>({} as Props);
    const navigation = useNavigation();

    function linkScreen (){
        navigation.navigate(navigate)
    }
    
    return(
        <TouchableOpacity style={styles.container} onPress={linkScreen} >
            <View style={styles.image}>
                {children}
            </View>
            <Text style={styles.text}>
                {title}
            </Text>

        </TouchableOpacity>

    );
}