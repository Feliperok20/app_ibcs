import {StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
container:{
    width: '100%',
    height: 125,
    paddingTop: getStatusBarHeight(), // Estou monstrando que o preenchimento do topo será até a "franja" da tela. 
    paddingHorizontal: 24,  
    flexDirection: 'row', // para ficar um do lado do outro...
    justifyContent: 'center',
    alignItems: 'center',
},
image:{
    width: 55,
    height: 95,

}

});
