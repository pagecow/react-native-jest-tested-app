import React from 'react';
import { View, Text, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './DetailsScreen.style';

import InfoCont from './components/InfoCont/InfoCont';

function DetailsScreen({ chosenContactInfo }) {
  if(!chosenContactInfo) {
    return (
      <ActivityIndicator 
        style={styles.activityIndicator}
        size="large"
        color="#6c94ad"
      />
    );
  } else {

    const e = chosenContactInfo;

    return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={styles.headerCont}>
            <ImageBackground 
              style={styles.thumbnail}
              source={{ uri: "https://static.thenounproject.com/png/2838682-200.png" }} 
            >
              <Image 
                style={styles.thumbnail}
                source={{ uri: e.largeImageURL }} 
              />
            </ImageBackground>
            <Text style={styles.name}>{e.name}</Text>
            {e.companyName ? <Text style={styles.companyName}>{e.companyName}</Text> : null}
          </View>
          {e.phone.home ? <InfoCont header={"Phone"} text={e.phone.home} type={"Home"} /> : null}
          {e.phone.mobile ? <InfoCont header={"Phone"} text={e.phone.mobile} type={"Mobile"} /> : null}
          {e.phone.work ? <InfoCont header={"Phone"} text={e.phone.work} type={"Work"} /> : null}
          {e.address ? <InfoCont header={"Address"} text={e.address} /> : null}
          {e.birthdate ? <InfoCont header={"Birthdate"} text={e.birthdate} /> : null}
          {e.emailAddress ? <InfoCont header={"Email"} text={e.emailAddress} /> : null} 
        </ScrollView> 
      </View>
    );
  } 
};

export default DetailsScreen;