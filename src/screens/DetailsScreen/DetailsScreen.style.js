import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    activityIndicator: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    companyName: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 16,
        color: "#8f8f8f95",
    },
    headerCont: {
        height: windowHeight * .4,
        width: "87%",
        marginLeft: "6.5%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: "#f1f1f1",
        marginBottom: 20,
    },
    infoCont: {
        width: "87%",
        marginLeft: "6.5%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: "#f1f1f1",
    },
    name: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 26,
        color: "#000000",
        marginTop: 15,
    },
    screen: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 20,
    },
    thumbnail: {
       height: windowHeight * .4 * .55,
       width: windowHeight * .4 * .55,
    }
});