import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'


export default function Home() {
  return (
    <SafeAreaView style = {{
      flex: 1, 
      paddingTop: Platform.OS === 'android' ? 75 : 0,
      backgroundColor: "#eee"
      }}> 
      <View style= {{ backgroundColor: "white", padding: 15}}>
      <HeaderTabs />
      <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}

  