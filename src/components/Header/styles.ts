import theme from "@theme/index";
import styled from "styled-components/native";
import { ListPlus } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    height: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;

    background-color: ${theme.COLORS.PURPLE};
`

export const AddList = styled(ListPlus).attrs(()=> ({
    size: 36,
    color: theme.COLORS.WHITE,

}))``

export const TextContainer = styled.View`
    flex-direction: column;
    width: 50%;
`

export const Title = styled.Text`
    right: 40%;
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const User = styled.Text`
    right: 40%;
    color: ${theme.COLORS.WHITE};
    font-size: 32px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`

export const ButtonAddList = styled.TouchableOpacity`
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



