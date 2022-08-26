import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,

              
    },
    title:{
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.fonte, 
    },
    label:{
        marginTop: 10,
        marginBottom:9,
    },
    footer:{
        marginVertical: 20,
        marginBottom: 20,
        marginTop: 50,
    },
    containertext:{
        marginHorizontal: 24,
        marginTop: 2,
    },
    imput:{
        fontSize:20  
    }
})