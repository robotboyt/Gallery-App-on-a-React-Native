import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import ImageElem from '../ImageElem'

const apiKey = 'SrT7fu3gioKw5Fuz83_hptFJLD-da39F0fMD5lD3VD8'
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${20}`


function HomeScreen({navigation}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resp = await fetch(apiUrl)
        const data = await resp.json()
        setData(data)
        setLoading(false)
      }
    
    return(
      <View style={styles.container}>
        {loading ? <Text style={{marginTop: "200px", fontSize: "60px", textAlign: 'center'}}>Loading...</Text> : null}
        <View style={{margin: "20px", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}> 
        {data.map(item => (
            <ImageElem key={item.id} item={item} navigation={navigation} />
        ))}
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: "100%",
      height: "100%",
      textAlign: 'center',
    },
  }); 


  const styleBlock = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  })
  

export default HomeScreen