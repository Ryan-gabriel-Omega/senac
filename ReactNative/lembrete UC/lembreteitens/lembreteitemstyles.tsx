
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    pressableContainer: {
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        backgroundColor: '#252535',
        borderBottomColor: '#3A3A4A',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: '#EAEAF0'
    },
    description: {
        fontSize: 14,
        color: '#B0B0C0'
    },
    price: {
        textAlign: 'right',
        color: '#EAEAF0'
    },
    avisoPrazo: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FF9F43'
    },
    destaque: {
        fontWeight: 'bold',
        color: '#A78BFA'
    }
});
