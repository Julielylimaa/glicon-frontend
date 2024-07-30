
import { Header } from "@components/Header";
import { BackButton, BackIcon, Container, Forms } from "./styles";
import { HistoryInput } from "@components/HistoryInput";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function AddRecordHistory(){

    const navigation = useNavigation()
    const handleGoBack = () =>{
        navigation.goBack()
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header user= "Registro" text="Crie seu">
                <BackButton onPress={handleGoBack}><BackIcon/></BackButton>
            </Header>
            <Forms>
                <HistoryInput/>
            </Forms>
            
        </Container>
        </TouchableWithoutFeedback>
    )
}