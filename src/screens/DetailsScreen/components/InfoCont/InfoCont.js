import React from 'react';
import { View, Text } from 'react-native';
import styles from './InfoCont.style';

export default function InfoCont({ header, text, type }) {
    if(header === "Phone") {
        text = text.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

    if(header === "Birthdate") {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let date = text.split('-');
        if(date[1] > 12 || date[1] < 1 || date[2] > 31 || date[2] < 1) {
            return null;
        } else {
            let month = months[Math.abs(date[1] - 1)]; 
            text = month + ` ${date[2]}, ${date[0]}`;
        }
    }

    if(header === "Address") {
       text = `${text.street}\n${text.city}, ${text.state} ${text.zipCode}, ${text.country}`
    }
    
    return (   
        <View style={styles.infoCont}>
            <Text style={styles.infoHeader}>{header}:</Text> 
            <View style={styles.infoTextCont}>
                <Text style={styles.infoText}>{text}</Text> 
                {type ? <Text style={styles.infoPhoneType}>{type}</Text> : null}
            </View>
        </View>
    );
  };