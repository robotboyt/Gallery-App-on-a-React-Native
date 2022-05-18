import React from 'react';
import { Image, View, Text } from 'react-native-web';

const ImageElem = ({navigation, item}) => {

    function addImage() {
        navigation.navigate('Art', {itemUrl: item.urls.regular})
    }

    return (
        <View style={{width: "400px", height: "500px", textAlign: 'center'}}> 
            <Image style={{width: "auto", height: "400px"}} source={item.urls.regular} onClick={addImage} />
            <Text style={{fontSize: '15px', marginTop: '5px', marginBottom: '5px'}}>{item.description || "No Name :("}</Text>
            <Text style={{fontSize: '20px'}}>{item.user.name}</Text>
        </View>
    );
};

export default ImageElem;