import {StyleSheet} from 'react-native';
 
export const styles = StyleSheet.create(
    {
    pressableContainer: {        
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        borderBottomColor: "#ddd",
        borderStyle: 'solid',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
   
    textContainer:
    {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        marginBottom: 8
    },
    description: {
        fontSize: 14,
        color: "#333"
    },
    price: {
        textAlign: 'right'
    },
    destaque: {
        fontWeight: 'bold',
        color: "#f14897"
    }});