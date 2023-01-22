import styled from "styled-components/native";
import Card from "react-native-paper";
export const Title = styled.Text`
color: ${(props) => props.theme.colors.ui.primary};
font-family: ${(props) => props.theme.fonts.heading}
padding-top: 10px;
padding-bottom: 5px;
font-size: 20px;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
