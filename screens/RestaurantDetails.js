import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/restaurantDetails/MenuItem'

export default function RestaurantDetails({route}) {
  return (
    <View style = {{
        flex: 1, 
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        backgroundColor: "#eee"
        }}> 
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{
        marginVertical: 20
      }} />
      <MenuItem style={{flexGrow:1}}/>
    </View>
    </View>
  )
}