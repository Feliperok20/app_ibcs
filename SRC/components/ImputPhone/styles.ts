import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
container:{
    width:'100%',
    height: 48,
    backgroundColor: theme.colors.backgroundImput,
    color: theme.colors.heading,
    borderRadius: 8,
    //fontFamily: theme.fonts.text400,
    fontSize:18,
    marginRight:4,
    textAlign: 'center',
    borderColor: theme.colors.borda,
    borderWidth: 1,
},
});

