import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "chef akwasi",
    icons,
    photos = ["https://i.ibb.co/HpkmMYQ/shawnanggg-nmp-W-Www-VSc-unsplash.jpg"],
    address = "random address",
    openingHours = "3",
    isCloseTemporarily = false,
    rating = 3,
  } = restaurant;

  const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 20px;
  `;

  return (
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title>{name}</Title>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};
