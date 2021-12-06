import React from 'react'
import { View, Text } from 'react-native'

const Optioncomponent = ({ data }) => {
  const question = data[0]
  return (
    console.log("This is Done"),
    <View>
      <Text style={{ color: 'black', alignItems: 'center' }}>{question}</Text>
      <Text style={{ color: 'black', alignItems: 'center' }}>{data[1]}</Text>
    </View>
  )
}

export default Optioncomponent
