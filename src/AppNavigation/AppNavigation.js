import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './AppNavigation.style';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Emoji from 'react-native-emoji';

import Contacts from '../screens/Contacts/Contacts';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigation(props) {
    const { 
        allContactsInfo, 
        favContactsInfo, 
        contactsInfo,
        chosenContactInfo,
        setChosenContactInfo,
        updateFavStatus
    } = props;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Contacts' 
                    options={{
                        title: 'Contacts',
                        headerTitleAlign: 'center', 
                        headerStyle: styles.header,
                    }}
                >
                    {(props) => (
                        <Contacts 
                            {...props} 
                            allContactsInfo={allContactsInfo} 
                            favContactsInfo={favContactsInfo} 
                            contactsInfo={contactsInfo} 
                            setChosenContactInfo={setChosenContactInfo} 
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen 
                    name='Details' 
                    options={{
                        title: 'Contacts',
                        headerTintColor: '#6c94ad',
                        headerBackImage: () => (
                            <FontAwesome5 
                                name="chevron-left" 
                                size={24} 
                                color={'#6c94ad'} 
                            />
                        ),
                        headerTitleContainerStyle: {
                        left: 35,
                        },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => updateFavStatus()}
                            >
                                {chosenContactInfo.isFavorite
                                    ? <Emoji name="star" style={styles.starFav} />  
                                    : <FontAwesome name="star-o" style={styles.star} />
                                }
                            </TouchableOpacity>
                        ),
                        headerStyle: styles.header,
                    }}           
                >
                    {(props) => (
                        <DetailsScreen 
                            {...props} 
                            chosenContactInfo={chosenContactInfo} 
                            setChosenContactInfo={setChosenContactInfo} 
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}