import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'
import Brands from '../../Components/Brands/Brands'
import SearchFilter from '../../Components/SearchFilter/SearchFilter'
import UpperCardSection from '../../Components/UpperCardSection.tsx/UpperCardSection'
import { FlatList } from 'react-native-gesture-handler'
import Car from '../../Components/CarCard/Car'



const Search = () => {
  const car = [1,2,3,4]
  return (
    <View>
      <UpperBar hasback={true} title='Search' />
      <SearchFilter  />
      <Brands  horizontal={true} />
      <UpperCardSection title={'Recommend For You'} />
      <FlatList
         keyExtractor={(item) => item.toString()}
         data={car}
         numColumns={2}
         renderItem={({item}) => <Car bookingbutton={true} />}
         columnWrapperStyle={{ gap: 4, marginBottom: 10 , justifyContent : 'center' }}
        contentContainerStyle={{ padding : 5  }}
      />
      <UpperCardSection title={'Our Popular Cars'} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})