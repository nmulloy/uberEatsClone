import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'

const localRestaurants = [
    {
        name: "Beachside Bar",
        image:"https://thumbs.dreamstime.com/b/beach-bar-clear-blue-sky-phayam-island-thailand-39667077.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/15/45/a2/75/benihana-s-flamboyant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1444,
        rating: 3.7,
    },
    {
        name: "McDonalds",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/1d/a1/6e/34/caption.jpg",
        categories: ["Fast Food"],
        price: "$",
        reviews: 144,
        rating: 4.2,
    },
    
]

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {localRestaurants.map((restaurant, index) => (
            <View 
            key={index}
            style={{marginTop: 10, padding: 15, backgroundColor: "white"}}
            >
                <RestaurantImage image={restaurant.image}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
            </View>
        ))}
    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
    <>
    <Image source={{uri: props.image}}
    style ={{width: "100%", height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name ='heart-outline' size={25} color="#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View  style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
        <View>
            <Text style={{fontSize: 15, fontWeight:"bold"}}> {props.name}</Text>
            <Text style={{fontSize: 13, color:"grey"}}> 30-45 · min</Text>
        </View>
        <View style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15
            }}>
            <Text> {props.rating} </Text>
        </View>
    </View>
   
);