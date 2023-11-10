import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:"https://thumbs.dreamstime.com/b/beach-bar-clear-blue-sky-phayam-island-thailand-39667077.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        review_count: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/15/45/a2/75/benihana-s-flamboyant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        review_count: 1444,
        rating: 3.7,
    },
    {
        name: "McDonalds",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/1d/a1/6e/34/caption.jpg",
        categories: ["Fast Food"],
        price: "$",
        review_count: 144,
        rating: 4.2,
    },
    
]

export default function RestaurantItem({navigation, ...props}) {
  return (
    <>
    {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 10}} 
        onPress={() => navigation.navigate("RestaurantDetails", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories
        })} 
        key={index}>  
            <View 
            style={{marginTop: 10, padding: 15, backgroundColor: "white"}}
            >
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
            </View>
        </TouchableOpacity>
    ))}
    </>
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