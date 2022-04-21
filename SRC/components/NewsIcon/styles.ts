import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    image: {
        width: 70,
        height: 66,         
    },
    container:{
        width: 70,
        height: 66,
        borderRadius: 8,
        backgroundColor: theme.colors.icon,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', //caso op servidor ja tenha uma imagem, o overflow não deixará que a magem ultrapasse a borda.  
    }    
});