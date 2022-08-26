import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingTop: 10,
        paddingBottom: 10,
    },
    icon:{
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: theme.colors.header0,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.icon,
        fontSize: 18,
    },
    number:{
        fontSize:30,
        fontFamily: theme.fonts.title700,
        color: "white"
    },
    containerTitle:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSched:{
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.shcedule,
        flexDirection: 'row',
        borderRadius: 8,
        //Android
        elevation:4,
        //iOS
        shadowColor: '#000',
        shadowOffset:{
            width:2,
            height:2
        },
        shadowOpacity: 0.43,
        shadowRadius:2.62,        
    }
})