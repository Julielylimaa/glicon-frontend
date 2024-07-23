import styled from "styled-components/native";
import theme from "@theme/index";
import { MagnifyingGlass } from "phosphor-react-native";

export const Container = styled.View`
    position: absolute;
    top: 26%; 
    width: 89%;
    height: 65px;
    
`
export const Search = styled.TextInput`
    background-color: ${theme.COLORS.WHITE};
    border-radius: 5px;
    padding-left: 7%;
    justify-content: center;
    width: 100%;
    height: 65px;
    font-size: 16px;
    align-items: center;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.4); 
`


export const SearchIcon = styled(MagnifyingGlass).attrs(()=> ({
    size: 26,
    color: theme.COLORS.GRAY,
}))`
    position: absolute;
    top: 26%;
    right: 1px;
    padding-right: 20%;

`