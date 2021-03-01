import React from 'react';
import { Text, View, Image, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './ContactsCont.style';
import Emoji from 'react-native-emoji';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ContactsCont({ fav, info, navigation, setChosenContactInfo }) {
  if(!info?.length) {
    return (
      <ActivityIndicator 
        style={styles.activityIndicator}
        size="large"
        color="#6c94ad"
      />
    );
  } else {
    return (   
      <View>
        <View style={styles.subHeaderCont}>
          <Text style={styles.subHeaderText}>
            {fav === true ? 'FAVORITE CONTACTS' : 'OTHER CONTACTS'}
          </Text>
        </View>
        {info.map((e, i) => {
          return(
            <View style={styles.contactCont} key={i}>
              <TouchableWithoutFeedback 
                onPressIn={() => setChosenContactInfo(e)} 
                onPressOut={() => navigation.navigate('Details')} 
              >
                <ImageBackground 
                  style={styles.thumbnail}
                  source={{ uri: "https://static.thenounproject.com/png/2838682-200.png" }} 
                >
                  <Image 
                    style={styles.thumbnail}
                    source={{ uri: e.smallImageURL }} 
                  />
                </ImageBackground>
              </TouchableWithoutFeedback>
              <View style={styles.nameAndCompanyCont}>
                {fav === true 
                  ? <Emoji 
                      style={styles.star} 
                      name="star"
                    /> 
                  : <Emoji 
                      style={styles.starHidden} 
                      name="star"
                    /> }
                <TouchableOpacity 
                  onPressIn={() => setChosenContactInfo(e)} 
                  onPressOut={() => navigation.navigate('Details')} 
                >
                <View>
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={styles.companyName}>{e.companyName}</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </View>
    );
  }
};