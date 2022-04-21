import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container:{
        width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingHorizontal: 24,
       marginBottom: 10,
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.icon,
        fontSize: 18,
    },
    subtitle:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.icon,
        fontSize: 13,
    }

})