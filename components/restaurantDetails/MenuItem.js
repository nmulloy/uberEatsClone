import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const foods = [
    {
        title: "Lasagna",
        description: "With butter letttuce, tomato and sauce bechamel",
        price: "€13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
    },
    {
        title: "Tandori Chicken",
        description: "Amazing indian dish with tenderloin chicken off the sizzler",
        price: "€19.20",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A deliciuos mexican dish",
        price: "€14.50",
        image: "https://www.seriouseats.com/thmb/wceJtot3qMjXcVAnk6PBw_OhxRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chilaquiles-verdes-fried-eggs-hero-01_1-d18b82d02fa54c92a05e66881e906814.JPG"
    },
    {
        title: "Chicken Cesar Salad",
        description: "One can never go wrong with a chicken caeser salad. Healthy!",
        price: "€21.50",
        image: "https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg"
    },
    {
        title: "Lasagna",
        description: "With butter letttuce, tomato and sauce bechamel",
        price: "€13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
    },
    {
        title: "Chicken",
        description: "With butter letttuce, tomato and sauce bechamel",
        price: "€13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
    },
]

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
})

export default function MenuItem() {
  return (
    
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 350}}>
    {foods.map((food, index) => (
    <View key={index} >
        <View  style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
        </View>
        <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}}/>
    </View>
    ))}
    </ScrollView>
    

  )
}

const FoodInfo =(props) => (
    <View style={{
        width:240,
        justifyContent: "space-evenly"
    }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{
            width: 100,
            height: 100,
            borderRadius: 8
        }}/>
    </View>
)