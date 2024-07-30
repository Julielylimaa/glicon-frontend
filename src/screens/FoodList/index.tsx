import { StyleSheet, Text, View } from "react-native";
import { AddList, ButtonAddList, Container, Title } from "./styles";
import { Header } from "@components/Header";
import { FoodBox } from "@components/FoodBox";
import { SearchBox } from "@components/SearchBox";
import { useNavigation } from "@react-navigation/native";
const user1 = "Juliely"

export function FoodList(){

    const navigation = useNavigation()
    const handleAddList = () => {
        navigation.navigate('count')
        console.log("mudar de pagina")
    }
    return(
        <Container>
            <Header user= {user1} text="Bem vindo,">
                <ButtonAddList onPress={handleAddList}>
                    <AddList/> 
                </ButtonAddList>
            </Header>
            <FoodBox/>
            <SearchBox />
        </Container>
        
    )

}

