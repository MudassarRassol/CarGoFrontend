import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ArrowRight } from 'lucide-react-native'
import assests from '../../assets'

const HomeNeaberyCar = () => {
  return (
    <View>
      <View style={styles.uppertitle}>
        <Text style={[styles.innertext, { fontWeight: 'bold', fontSize: 25 }]}>
          CAR GO
        </Text>
        {/* <View style={styles.textcon}>
          <Text style={styles.innertext}>View All</Text>
          <ArrowRight size={12} />
        </View> */}
      </View>
      <View style={{marginHorizontal : 20 , marginVertical : 10 , paddingVertical : 20 }} >
        <Image source={assests.car1}  resizeMode='contain'    />
      </View>
    </View>
  )
}

export default HomeNeaberyCar

const styles = StyleSheet.create({
    uppertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal : 20
  },
  innertext: {
    fontSize: 12,
    // fontWeight: 'bold',
    letterSpacing: 1,
    
  },
  textcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
})