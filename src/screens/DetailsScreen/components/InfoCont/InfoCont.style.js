import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    infoCont: {
        width: "87%",
        marginLeft: "6.5%",
        justifyContent: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: "#f1f1f1",
        marginBottom: 20,
    },
    infoHeader: {
        textTransform: 'uppercase',
        fontFamily: 'OpenSans_600SemiBold',
        color: "#8f8f8f80",
        marginBottom: 10,
    },
    infoTextCont: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    infoText: {
        fontFamily: 'OpenSans_600SemiBold',
    },
    infoPhoneType: {
        fontFamily: 'OpenSans_600SemiBold',
        color: "#8f8f8f",
    }
});