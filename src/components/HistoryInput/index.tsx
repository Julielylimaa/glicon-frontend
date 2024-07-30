import { ScrollView, Text } from "react-native";
import { Container, Input, InputBox, Label, SubmitButton, TextButton, Title} from "./styles";


import theme from "@theme/index";
import { useAddHistory } from "src/history/AddHistory";
import { useHistoryList } from "src/history/historyList";

export function HistoryInput(){
    const { title, setTitle, description, setDescription, value, setValue, time, setTime, resetFields  } = useAddHistory()
    const addHistory = useHistoryList()
    const handleSubmit = () => {
        let data = {
            title,
            description,
            value,
            time,
            id:2,
            date: "28/07/2024"
        }
        console.log('Dados do registro:', data);
        addHistory.add(data)
        resetFields()
    }
    return(
        <Container>
            <ScrollView style={{ flex: 1, width: '100%'}} 
            contentContainerStyle={{ paddingBottom: 25}}
            >
            <InputBox>
                <Label>Registro</Label>
                <Input 
                placeholder="Título do registro" 
                placeholderTextColor="gray"
                value={title}
                onChangeText={setTitle}
                />
            </InputBox>
            <InputBox>
                <Label>Descrição</Label>
                <Input 
                placeholder="Descreva o registro" 
                placeholderTextColor="gray"
                value={description}
                onChangeText={setDescription}
                />
            </InputBox>
            <InputBox>
                <Label>Valor Medido</Label>
                <Input 
                placeholder="Valor da glicemia medida" 
                placeholderTextColor="gray"  
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
                />

            </InputBox>
            <InputBox>
                <Label>Horário</Label>
                <Input 
                placeholder="Horário da medição" 
                placeholderTextColor="gray"
                value={time}
                onChangeText={setTime}
                />
            </InputBox>
            </ScrollView>
            <SubmitButton onPress={handleSubmit}><TextButton>Adicionar Registro</TextButton></SubmitButton>

        </Container>
    )
}