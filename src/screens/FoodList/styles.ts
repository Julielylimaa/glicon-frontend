import theme from '@theme/index'
import { ListPlus } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color:${theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
    `

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
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

export const AddList = styled(ListPlus).attrs(()=> ({
    size: 36,
    color: theme.COLORS.WHITE,

}))``

