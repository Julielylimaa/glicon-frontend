import theme from "@theme/index";
import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;
    background-color:${theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
`

export const Forms = styled.View`
    width: 100%;
    height: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;

    background-color: #F7F5FA;

`

export const BackIcon = styled(ArrowLeft).attrs(() => ({
    size: 36,
    color: theme.COLORS.WHITE,
}))``




export const BackButton = styled.TouchableOpacity`
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
