import { Header } from "@components/Header";
import { AddList, ButtonAddList, Container } from "./styles";
import { UserInputs } from "@components/UserInputs";
import { Keyboard, TouchableWithoutFeedback } from "react-native";


export function FoodCount(){
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header user="Carboidratos" text="Contagem de">
                <ButtonAddList>
                    <AddList /> 
                </ButtonAddList>
            </Header>
            <UserInputs/>
        </Container>
        </TouchableWithoutFeedback>
    )

}
