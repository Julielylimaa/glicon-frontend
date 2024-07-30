import { Add, ButtonAdd, Container, Title } from "./styles";
import { Header } from "@components/Header";
import { HistoryBox } from "@components/HistoryBox";

import { useNavigation } from "@react-navigation/native";


export function HistoryScreen(){

    const navigation = useNavigation()
    const handleAddRecord = () => {
        navigation.navigate('addRecord')
        console.log("mudar de pagina")
    }
    return(
        <Container>
            <Header user= "Histórico" text="Acompanhe seu">
                <ButtonAdd onPress={handleAddRecord}><Add/></ButtonAdd>
            </Header>

            <HistoryBox/>
        </Container>
        
    )

}

