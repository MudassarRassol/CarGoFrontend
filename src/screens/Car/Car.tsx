import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'

const CarScreen = () => {
  return (
    <View>
      <UpperBar hasback={true} title='Car Details' />
    </View>
  )
}

export default CarScreen

const styles = StyleSheet.create({})