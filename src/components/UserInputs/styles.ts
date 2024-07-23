import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
    position: absolute;
    top: 26%; 
    width: 85%;
    height: 65px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const InputBox = styled.TextInput`
    background-color: ${theme.COLORS.WHITE};
    border-radius: 5px;
    text-align: center;
    width: 28%;
    height: 65px;
    font-size: 16px;
    align-items: center;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.4); 
`