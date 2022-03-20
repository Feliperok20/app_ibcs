
import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create ({
    container:{
        flex:1,
        //height:100,
        //width:120,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:10,
        //backgroundColor: 'black'  
    },
    image:{
        height: 60,
        width:60,
    },
    text:{
        flex:1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        color: theme.colors.fonte,
        paddingTop: 1,
    },

});

