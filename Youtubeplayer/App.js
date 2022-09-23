import React, { useState, useCallback, useRef } from "react";
import { Animated, Button, View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Touchable, TouchableOpacity, FlatList, Dimensions, Image } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.3;

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#52c0b4',
  secondary: '#e0f4f1',
  light: '#f9f9f9',
  grey: '#908e8c',
  orange: '#f5a623',
};

const hotels = [
  {
    id: '1',
    videoId: "SN5ECT6XMUI",
    name: 'Double Tree Hotel',
    location: 'Goa',
    price: 750,
    image: require('./assets/hotel1.jpg'),
    details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
  },
  {
    id: '2',
    videoId: "iuqfU9Ll300",
    name: 'villa Riviera',
    location: 'Goa',
    price: 1250,
    image: require('./assets/hotel2.jpg'),
    details: "Villa Riviera is located in Saipem, a few minutes away from Candolim beach, a very popular beach in Goa. If you wish to spend a day near the beach, the sandy beach of Candolim is easily accessible by a short drive. Many shops, restaurants, beach shacks are located near the Candolim beach",
  },
  {
    id: '3',
    videoId: "BEmp-rW2xEg",
    name: 'Hotel Surbhi',
    location: 'Manali',
    price: 999,
    image: require('./assets/hotel3.jpg'),
    details: "Hotel Surbhi is situated in the valley of Vasishth, Manali, appealing to many outstation guests.    This stylish and the property offers comfortable and well-furnished rooms, suitable for tourists from all over the world. This property has quite surprising viewpoints with completely furnished rooms and windows with. The rooms are spacious well lit and satisfyingly relaxing. "
  },
  {
    id: '4',
    videoId: "3cchY1q44bk",
    name: 'Hotel Silver Line',
    location: ' Mussoorie',
    price: 999,
    image: require('./assets/hotel4.jpg'),
    details: "Located in Mussoorie, within a 9-minute walk of Mussoorie Mall Road and half a kilometer of Camel's Back Road, Hotel Silver Line provides accommodations with a restaurant as well as free private parking for guests who drive. This 3-star hotel offers a 24-hour front desk and room service."
  },
];

export default function App() {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const change = (e) => {
    setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
    console.log(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
  }
  const Card = ({ hotel, index }) => {

    const inputRange = [(index - 1) * cardWidth, index * cardWidth, (index + 1) * cardWidth];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7]
    })
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8]
    })
    //     disabled = { activeCardIndex != index
    // }

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);

    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
    return <TouchableOpacity activeOpacity={1} onPress={togglePlaying} >
      <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
        <Animated.View style={{ ...style.cardOverLay, opacity }}></Animated.View>

        <YoutubePlayer
          height={300}
          play={playing}
          videoId={hotel.videoId}
          onChangeState={onStateChange}
        />

        <View style={style.cardDetails}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View >
              <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            </View>


          </View>
          <View>
            <Text>hello</Text>
          </View>

        </View>
      </Animated.View>
    </TouchableOpacity>
  }





  return (
    <View>

      <Animated.FlatList onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })} horizontal data={hotels} contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidth / 2 - 40 }} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => <Card hotel={item} index={index}> </Card>} snapToInterval={cardWidth} ></Animated.FlatList>

    </View>
  );
}


const style = StyleSheet.create({
  topHotelCard: {
    height: 150,
    width: 250,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 150,
    width: '100%',
    // borderTopRightRadius: 10,
    borderRadius: 10,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#E5E7E9",
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText:
  {
    fontSize: 17,
    fontWeight: "bold"
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "#E3FBF3"
  },
  cardImage: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: "#48B192",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: "#E5E7E9",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",


  },
  cardOverLay: {
    height: 280,
    backgroundColor: "#E5E7E9",
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15

  },
  displayCard: {

    backgroundColor: "#E5E7E9",
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 15,

  },
  displayCardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5

  }
})
