import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#41C58C"
    },

    header:{
        alignItems: "center",
        maxHeight: 500,
    },

    title:{
        textAlign: "center",
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
    },

    explanation:{
        color: '#fff',
        fontSize: 16,
    },

    form:{
        marginTop: 20,
    },

    label:{
        color: '#d4c2ff',
    },

    inputGroup:{
        flexWrap: "wrap",
    },

    preNumber:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock:{
        width: '45%'
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4, 
        marginBottom: 16
    },

    submitButton:{
        backgroundColor:  '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText:{
        color: '#FFF',
        fontSize: 16,
    },
});