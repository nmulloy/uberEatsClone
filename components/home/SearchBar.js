import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const getGoogleApiKey = async () => {
    const api_url = 'http://192.168.68.112:3000/googleApi';
    const response = await fetch(api_url, { mode: 'cors' });

    const data = await response.json();
    const GoogleAPi = JSON.parse(data)
    return GoogleAPi.API;
}

export default function SearchBar({ cityHanlder }) {
  const [googleApiKey, setGoogleApiKey] = React.useState(null);

  React.useEffect(() => {
    const fetchApiKey = async () => {
      const apiKey = await getGoogleApiKey();
      setGoogleApiKey(apiKey);
    };

    fetchApiKey();
  }, []); // Run the effect only once when the component mounts
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: googleApiKey }}
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data.description)
          const city = data.description.split(",")[0]
          cityHanlder(city)
        }}
       /* requestUrl={{
          useOnPlatform: 'web', // or "all"
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
        }} Use on web */
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}