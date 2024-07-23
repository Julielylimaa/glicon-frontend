import { StyleSheet, Text, View } from "react-native";
import { AddList, ButtonAddList, Container, Title } from "./styles";
import { Header } from "@components/Header";
import { FoodBox } from "@components/FoodBox";
import { SearchBox } from "@components/SearchBox";

const user1 = "Juliely"

export function FoodList(){
    return(
        <Container>
            <Header user= {user1} text="Bem vindo,">
                <ButtonAddList>
                    <AddList /> 
                </ButtonAddList>
            </Header>
            <FoodBox/>
            <SearchBox />
        </Container>
        
    )

}

