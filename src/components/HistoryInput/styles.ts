import styled from "styled-components/native";
import theme from "@theme/index";

export const Container = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
    
`

export const InputBox = styled.View`
    width: 100%;
    height: 25%;
    padding-top:3% ;
`
export const Input = styled.TextInput`
    background-color: ${theme.COLORS.WHITE};
    border-radius: 5px;
    padding-left: 3%;
    justify-content: center;
    width: 100%;
    height: 65px;
    font-size: 16px;
    align-items: center;
    
    box-shadow: 0px 2px 20px rgba(100, 100, 111, 0.1); 
`

export const Title = styled.Text`
    
`
export const Label = styled.Text`
    padding-bottom: 5%;
    color: ${theme.COLORS.DARK_GRAY};
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: ${theme.COLORS.PURPLE};
    border-radius: 5px;
    justify-content: center;
    width: 100%;
    height: 65px;
    font-size: 16px;
    align-items: center;
    position: fixed;
    
    box-shadow: 0px 2px 20px rgba(100, 100, 111, 0.1); 
`

export const TextButton = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
`