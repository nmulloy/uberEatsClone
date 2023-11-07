import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "SNYhAQ6vYQrELQIdT3c9OgTDix2BWkcTdXcmRS6uDS9FrPxjCAnjKeglh8LgjZg4ysCrpLdNOPHKUxoTDGTEzu0iC-8yVOXjLIbCPrIUCElW0i7JVcbIcfYRDN9DZXYx"

export default function Home() {
    const [restaurantData, setRestaurantData] = React.useState([])

      const getRestaurantsFromYelp = () => {

        const api_url = "http://192.168.68.112:3000/api";
        return fetch(api_url).then((res) => res.json()).then((json) => setRestaurantData(json.businesses))

    };


  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

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
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  )
}

  