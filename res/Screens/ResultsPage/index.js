import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AnimatedLottieView from 'lottie-react-native'
const ResultPage = ({ route }) => {
  const itemId = route.params
  const navigation = useNavigation()
  return (
    console.log(itemId),
    <View style={{ alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'white' }} >
      <Text style={{ color: 'black', marginTop: '8%', fontWeight: 'bold', fontSize: 40 }}>Quiz Result</Text>
      <AnimatedLottieView style={styles.image} source={require('../../../assets/trophy.json')} autoPlay loop />
      <Text style={{ color: 'black', marginTop: '10%', fontSize: 25, fontWeight: 'bold' }}>
        Congratulation!
      </Text>
      <Text style={{ color: 'black', marginTop: 15 }}>YOUR SCORE</Text>
      <Text style={{ color: 'black', marginTop: 15, fontSize: 25 }}>{itemId.marks} / 10</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttontext}>Take a New Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultPage

const styles = StyleSheet.create({

  image: {
    width: 400,
    height: 400,
  },
  button: {
    width: (Dimensions.get('window').width) - 100,
    backgroundColor: '#6330c2',
    height: 75,
    marginTop: '10%',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
  }
})
