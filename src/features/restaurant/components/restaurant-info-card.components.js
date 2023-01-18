import React from "react";
import { Image } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "chef akwasi",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://i.ibb.co/HpkmMYQ/shawnanggg-nmp-W-Www-VSc-unsplash.jpg"],
    address = "random address",
    openingHours = "3",
    isCloseTemporarily = true,
    rating = 3,
    isOpenNow = true,
  } = restaurant;

  const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading}
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 20px;
  `;

  const Rating = styled.View`
    flex-direction: row;
  `;

  const Section = styled.View`
    flex-direction: row;
    justify-content: space-between;
  `;

  const SectionEnd = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
  `;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Spacer position="top" size="large" />
        <Text variant="label">{name}</Text>
        <Spacer position="bottom" size="large" />
        <Section>
          <Rating>
            {ratingArray.map((stars) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="caption">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="body">{address}</Text>
      </Card.Content>
    </Card>
  );
};
