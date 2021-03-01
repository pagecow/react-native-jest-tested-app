import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Contacts.style';

import ContactsCont from './components/ContactsCont/ContactsCont';

export default function Contacts({ navigation, allContactsInfo, favContactsInfo, contactsInfo, setChosenContactInfo }) {
  const [favContactsInfoUpdated, setFavContactsInfoUpdated] = useState([]);
  const [contactsInfoUpdated, setContactsInfoUpdated] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(allContactsInfo){
      setFavContactsInfoUpdated(allContactsInfo.filter(e => e.isFavorite === true));
      setContactsInfoUpdated(allContactsInfo.filter(e => e.isFavorite === false));
    }
  }, [isFocused])
  
  if(!contactsInfo?.length && !favContactsInfo?.length) {
    return (
    <ActivityIndicator 
        style={styles.activityIndicator}
        size="large"
        color="#6c94ad"
    />
    );
  } else if(!favContactsInfoUpdated?.length && !contactsInfoUpdated?.length) {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <ContactsCont 
            fav={true} 
            info={favContactsInfo} 
            setChosenContactInfo={setChosenContactInfo} 
            navigation={navigation}
          />
          <ContactsCont 
            fav={false} 
            info={contactsInfo} 
            setChosenContactInfo={setChosenContactInfo} 
            navigation={navigation}
          />        
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <ContactsCont 
            fav={true} 
            info={favContactsInfoUpdated} 
            setChosenContactInfo={setChosenContactInfo} 
            navigation={navigation}
          />
          <ContactsCont 
            fav={false} 
            info={contactsInfoUpdated} 
            setChosenContactInfo={setChosenContactInfo} 
            navigation={navigation}
          />        
        </ScrollView>
      </View>
    );
  }
};