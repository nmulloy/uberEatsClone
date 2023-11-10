import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "SNYhAQ6vYQrELQIdT3c9OgTDix2BWkcTdXcmRS6uDS9FrPxjCAnjKeglh8LgjZg4ysCrpLdNOPHKUxoTDGTEzu0iC-8yVOXjLIbCPrIUCElW0i7JVcbIcfYRDN9DZXYx"

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = React.useState([]);
    const [city, setCity] = React.useState('Dublin');
    const [activeTab, setActiveTab] = React.useState('Delivery');

      const getRestaurantsFromYelp = () => {
        const api_url = `http://192.168.68.112:3000/api/${activeTab}/${city}`;
        return fetch(api_url).then((res) => res.json()).then((json) => setRestaurantData(json.businesses))
        //.filter((business) => business.transactions.includes(activeTab.toLowerCase))))

    };


  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab ])

  return (
    <SafeAreaView style = {{
      flex: 1, 
      paddingTop: Platform.OS === 'android' ? 50 : 0,
      backgroundColor: "#eee"
      }}> 
      <View style= {{ backgroundColor: "white", padding: 15}}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SearchBar cityHanlder = {setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

  