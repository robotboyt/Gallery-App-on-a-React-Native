import React from 'react'
import { View, Image,  StyleSheet} from 'react-native-web'


function DetailsScreen({route}) {

  const {itemUrl} = route.params


    return(
      <View style={styles.container}>
        <Image style={{width: "1000px", height: "900px"}} source={itemUrl}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      height: "100%",
      textAlign: 'center',
    },
  });
  

export default DetailsScreen