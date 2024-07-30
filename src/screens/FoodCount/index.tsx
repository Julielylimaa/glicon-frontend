import { Header } from "@components/Header";
import { GoBack, ButtonGoBack, Container, List } from "./styles";
import { UserInputs } from "@components/UserInputs";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FoodCountList } from "@components/FoodCountList";
import { ListsButton } from "@components/ListsButton";


export function FoodCount(){

    const navigation = useNavigation()
    const handleGoBack = () =>{
        navigation.goBack()
    }

    return(
        
                <Container>
            
                    <Header user="Carboidratos" text="Contagem de">
                        <ButtonGoBack onPress={handleGoBack}>
                            <GoBack/> 
                        </ButtonGoBack>
                    </Header>
    
                    <FoodCountList/>  
                    <UserInputs/>
                    <ListsButton></ListsButton>
                </Container>
                
            
        
    )

}
