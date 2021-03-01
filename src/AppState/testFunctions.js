import axios from 'axios';

import dummyData from './dummyData.json';

module.exports = {
    fetchData: () => axios.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
        .then(res => res.data)
        .catch(err => 'error'),
    sortObject: () => {
        let data = dummyData.sort((a, b) => {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) { return -1 }
            if (nameA > nameB) { return 1 }
            return 0;
        });
        return data.map(e => e.name)
    },
    filterObjFavs: () => dummyData.filter(e => e.isFavorite === true),
    filterObjNonFavs: () => dummyData.filter(e => e.isFavorite === false),
}