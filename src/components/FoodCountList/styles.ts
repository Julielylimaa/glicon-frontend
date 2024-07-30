import theme from "@theme/index";
import styled from "styled-components/native";

import { Trash } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    height: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;

    background-color: #F7F5FA;
`


export const FoodListContainer = styled.View`
    width: 89%;
    height: 100%;
    margin-top: 30%;
    background-color: transparent;
`;

export const Box = styled.View`
    width: 100%;
    height: 65px;
    margin-bottom: 15px ;
    padding: 16px;
    background-color: ${theme.COLORS.WHITE};
`

export const FoodName = styled.Text`
    color: ${theme.COLORS.DARK_GRAY};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const FoodCHOBox= styled.View`
    position: absolute;
    left: 60%;
    bottom: 50%;
    width: 95px;
    height: 30px;
    border-width: 1px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    
`
export const FoodCHO = styled.Text`
    font-size: 13px;
`

export const FoodDescription = styled.Text`
    color: ${theme.COLORS.GRAY};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-top: 2px;
`

export const DeleteIcon = styled(Trash).attrs(()=>({
    size: 15,
    color: theme.COLORS.DARK_GRAY,
    weight: 'bold'
}))`
`

export const DeleteButton = styled.TouchableOpacity`
    width: 20px;
    height: 25px;
    position: absolute;
    left: 100%;
    bottom: 60%;
    border: transparent;
    align-items: center;
    justify-content: center;

`



