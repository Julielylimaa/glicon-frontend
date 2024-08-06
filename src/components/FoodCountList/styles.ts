import theme from "@theme/index";
import styled from "styled-components/native";

import { Minus, Plus, Trash } from "phosphor-react-native";

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
    height: 85%;
    margin-top: 10%;
    background-color: transparent;
`;

export const Box = styled.View`
    width: 100%;
    height: 110px;
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
    left: 75%;
    bottom: 75%;
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
    color: theme.COLORS.PURPLE,
    weight: 'bold'
}))`
`

export const DeleteButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border:1px solid transparent;
    border-radius: 5px;
    align-items: center;
    justify-content: center; 
    padding: 5px;
    background-color: #EDEDED;
`

export const QttDeleteContainer = styled.View`
    width: 130px;
    margin-top: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const QttBox= styled.View`    
    width: 95px;
    height: 32px;
    border: 1px solid #EDEDED;
    flex-direction: row;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
    
`
export const QttText = styled.Text`
    color: black;
`

export const MinusQttButton = styled.TouchableOpacity`
`

export const MinusIcon = styled(Minus).attrs(()=> ({
    size: 15,
    color: theme.COLORS.PURPLE,
    weight: 'bold'
}))``

export const PlusQttButton = styled.TouchableOpacity`
`

export const PlusQttIcon = styled(Plus).attrs(()=> ({
    size: 15,
    color: theme.COLORS.PURPLE,
    weight: 'bold'
}))``
