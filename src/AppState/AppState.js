import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
    const [allContactsInfo, setAllContactsInfo] = useState([]);
    const [favContactsInfo, setFavContactsInfo] = useState([]);
    const [contactsInfo, setContactsInfo] = useState([]);
    const [chosenContactInfo, setChosenContactInfo] = useState([]);
    let [fontsLoaded] = useFonts({ 
        OpenSans_400Regular, 
        OpenSans_600SemiBold,
        OpenSans_700Bold, 
    });

    useEffect(() => { 
        axios.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
            .then((res) => {
                let data = res.data.sort((a, b) => {
                    var nameA = a.name.toUpperCase(); 
                    var nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) { return -1 }
                    if (nameA > nameB) { return 1 }
                    return 0;
                })
                return (
                    setAllContactsInfo(data), 
                    setFavContactsInfo(data.filter(e => e.isFavorite === true)), 
                    setContactsInfo(data.filter(e => e.isFavorite === false))
                );
        })
        .catch(error => console.log(error))   
    }, [])

    const updateFavStatus = () => {
        let id = chosenContactInfo.id;
        setChosenContactInfo({ ...chosenContactInfo, isFavorite: !chosenContactInfo.isFavorite });    
        setAllContactsInfo(allContactsInfo.map(e => 
            e.id === id
                ? { ...e, isFavorite: !e.isFavorite }
                : e
        ));
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } 

    return (
        <AppNavigation 
            allContactsInfo={allContactsInfo}
            favContactsInfo={favContactsInfo}
            contactsInfo={contactsInfo}
            chosenContactInfo={chosenContactInfo}
            setChosenContactInfo={setChosenContactInfo}
            updateFavStatus={updateFavStatus}
        />
    );
}