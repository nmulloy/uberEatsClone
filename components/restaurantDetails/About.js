import { View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'


const yelpRestaurantInfo ={

    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://realfood.tesco.com/media/images/1400x919-230616-15-MINUTE-LUNCH-WIN-GREEK-SMASH-KEBAB-WRAPS-0076-11-0a747d3d-1a9b-42f9-a5fb-b90a1bca7c6f-0-1400x919.jpg",
    price: '$$',
    reviews: "1500",
    rating: "4.5",
    categories: [
        {title: 'Thai'}, {title: "Comfort Food"}, {title: "Coffee"}
    ]
}



export default function About(props) {

const{name, image, price, reviews, rating, categories} = props.route.params;

const formattedCategories = categories.map((cat) => cat.title).join(" · ");
const restaurantDescription = `${formattedCategories} ${price ? ' · ' + price : ""} · 🎫 · ${rating}⭐ · (${reviews}+)`;


  return (
    <SafeAreaView>
      <RestaurantImage image = {image}/>
      <RestaurantTitle name ={name}/>
      <RestaurantDescription description = {restaurantDescription} />
    </SafeAreaView>
  )
}

const RestaurantImage = (props) => (
    <Image source ={{uri: props.image}} style={{
        width: "100%",
        height: 180
    }} />
)

const RestaurantTitle = (props) => (
    <Text
    style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text    
    style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.description}
    </Text>
)