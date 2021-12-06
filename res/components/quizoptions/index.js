import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Optioncomponent from './optioncomponent'

const Quizoptions = (data) => {
  return (

    < FlatList

      data={data}
      renderItem={({ item }) => <Optioncomponent data={item} />}
    />
  )
}

export default Quizoptions
