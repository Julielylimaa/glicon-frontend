import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding-left: 5%;
    padding-right:5%;
    height: 100px; 
    align-items: center;
`

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: ${theme.COLORS.PURPLE};
    border-radius: 5px;
    justify-content: center;
    height: 65px;
    width: 100%;
    font-size: 16px;
    align-items: center;
    position: absolute;
    
    box-shadow: 0px 2px 20px rgba(100, 100, 111, 0.1); 
`

export const TextButton = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
`