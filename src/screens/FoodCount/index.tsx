import { Header } from "@components/Header";
import { GoBack, ButtonGoBack, Container, List, ButtonContainer, ModalContainer, CenterView } from "./styles";
import { UserInputs } from "@components/UserInputs";
import { Keyboard, Modal, TouchableWithoutFeedback, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FoodCountList } from "@components/FoodCountList";
import { ListsButton } from "@components/ListsButton";
import { useModal } from "src/ModalState/ModalState";


export function FoodCount(){

    const navigation = useNavigation()
    const handleGoBack = () =>{
        navigation.goBack()
    }
    const { modalVisible, setModalVisible } = useModal()

    return(
        
                <Container>
            
                    <Header user="Carboidratos" text="Contagem de">
                        <ButtonGoBack onPress={handleGoBack}>
                            <GoBack/> 
                        </ButtonGoBack>
                    </Header>
    
                    <FoodCountList/>  
                    <UserInputs/>
                    <ButtonContainer>
                        <ListsButton text={"Calcular Insulina"} onPress={() => setModalVisible(true)}></ListsButton>
                    </ButtonContainer>
                    
                    <CenterView>
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        >
                        <CenterView>
                            <ModalContainer>
                                <Text>12 ml de insulina</Text>
                                <Text>Valor para x alvo e y CHO/uni</Text>
                                <ListsButton text="" onPress={() => setModalVisible(false)}></ListsButton >
                                <ListsButton text= "" onPress={() => setModalVisible(false)}></ListsButton >
                            </ModalContainer>
                        </CenterView>
                        
                        
                        </Modal>
                    </CenterView>
                    
                </Container>
                
            
        
    )

}
