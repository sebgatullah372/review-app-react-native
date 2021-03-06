import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import globalStyles from "../styles/globalStyles";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Review 1 title", rating: 5, body: "Review 1 body", key: "1" },
    { title: "Review 2 title", rating: 4, body: "Review 2 body", key: "2" },
    { title: "Review 3 title", rating: 3, body: "Review 3 body", key: "3" },
  ]);

  // const pressHandler = (review) => {
  //   // console.log(review);
  //    navigation.navigate('ReviewDetails', review)
  // };
  return (
    <View>
      <Text>Home Screen </Text>
   
      {/* <Button title='go to review details screen' onPress={pressHandler}/> */}

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {/* <Text>{item.title}</Text> */}
            <Card
              elevation={50}
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
                
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.body}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
