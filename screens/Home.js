import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'


export default function Home() {
  return (
    <SafeAreaView style = {{
      flex: 1, 
      paddingTop: Platform.OS === 'android' ? 50 : 0,
      backgroundColor: "#eee"
      }}> 
      <View style= {{ backgroundColor: "white", padding: 15}}>
      <HeaderTabs />
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  )
}

  