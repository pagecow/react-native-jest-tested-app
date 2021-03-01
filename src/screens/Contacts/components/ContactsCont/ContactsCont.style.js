import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    contactCont: {
        height: windowHeight * .125,
        width: "87%",
        marginLeft: "6.5%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: "#f1f1f1",
    },
    companyName: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 12,
        color: "#8f8f8f",
    },
    nameAndCompanyCont: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    name: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        color: "#474747",
    },
    star: {
        fontSize: 11,
        marginTop: 3,
        marginRight: 5,
    }, 
    starHidden: {
        fontSize: 11,
        marginTop: 3,
        marginRight: 5,
        opacity: 0,
    }, 
    subHeaderCont: {
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
        padding: 5,
        paddingLeft: 20,
    },
    subHeaderText: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 12,
        color: "#474747",
    },
    thumbnail: {
       height: windowHeight * .125 * .6,
       width: windowHeight * .125 * .6,
       marginRight: 30,
    }
});