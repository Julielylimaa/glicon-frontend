import theme from "@theme/index"
import { Trash } from "phosphor-react-native"
import styled from "styled-components/native"


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

export const Box = styled.View`
    width: 100%;
    height: 120px;
    margin-bottom: 15px ;
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid transparent;
    border-radius: 5px;
`

export const HistoryContainer = styled.View`
    width: 89%;
    height: 100%;
    margin-top: 15%;
    background-color: transparent;  
    
`

export const LeftView = styled.View`
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    padding: 16px;
    
`

export const Title = styled.Text`
    margin-bottom:10px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 20px;
    color: ${theme.COLORS.DARK_GRAY};
`

export const Description = styled.Text`
    margin-bottom:15px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY};
`

export const ValueBox = styled.View`
    width: 80px;
    height: 25px;
    background-color: ${theme.COLORS.LIGHT_GREEN_2};
    border: 1px solid ${theme.COLORS.LIGHT_GREEN};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

export const ValueText = styled.Text`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN};

`

export const RightView = styled.View`
    position: absolute;
    left: 75%;
    padding-top: 16px;
    align-items: flex-end;
`

export const DateText = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.DARK_GRAY};`

export const HourText = styled.Text`
    padding-top: 5px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.DARK_GRAY};
`

export const DeleteButton = styled.TouchableOpacity`
    background-color: #EDEDED;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 10px;
    margin-top: 20px;
    
`

export const DeleteIcon = styled(Trash).attrs(()=>({
    size: 20,
    color: theme.COLORS.PURPLE,
}))``
