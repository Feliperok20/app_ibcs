import {StyleSheet} from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
        flex:1,  
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.icon,
        fontSize: 20,
        marginBottom: 2,        
    },
    list:{
        marginTop: 30,
        marginLeft: 15,
        
        
    },
    schedule:{
        marginRight: 15,    
    }
})