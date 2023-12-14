import { View, Text, StyleSheet, Button,Image } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
  return (
    <View>
      <Image source={require('../Assests/couple-cafe.png')} style={styles.ImageContainer} />
      <View style={{width:'50%', alignSelf:'flex-end', marginTop:8}}>
        <Button title='Next' color='green' onPress={()=>navigation.navigate('first')}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    ImageContainer:{
        width:'100%',
        height:'93%'
    }
})