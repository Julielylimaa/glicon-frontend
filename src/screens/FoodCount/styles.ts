import theme from "@theme/index";
import { ArrowUUpLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`


export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`

export const List = styled.View`
    width: 100%;
    height: 70%;
    flex-direction: column;
    position: absolute;
    bottom: 0;

    background-color: #F7F5FA;

`
export const ButtonGoBack = styled.TouchableOpacity`
width: 55px;
height: 55px;
left: 80%;
position: absolute;
border: transparent;
border-radius: 15px;
align-items: center;
justify-content: center;
background-color: ${theme.COLORS.DARK_PURPLE};
`

export const GoBack = styled(ArrowUUpLeft).attrs(()=> ({
    size: 36,
    color: theme.COLORS.WHITE,

}))``

export const ButtonContainer = styled.View`
    width: 100%;
    bottom: -87%;
    position: fixed;
`

export const ModalContainer = styled.View`
    background-color: white;
    width: 80%;
    
    
`
export const CenterView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`
