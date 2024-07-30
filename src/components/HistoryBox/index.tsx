import { FlatList } from "react-native"
import {Title,LeftView, Box, Container, RightView, DateText, Description, HistoryContainer, HourText, ValueBox, ValueText, DeleteButton, DeleteIcon } from "./styles"
import { useHistoryList } from "src/history/historyList";



// const registros = [
//     {id: 1, title: 'Medição de glicose', description: 'Descrição do registro', value: 120, date: "01/07/2020", hour: "13:40" },
//     {id: 2, title: 'Medição de glicose', description: 'Descrição do registro', value: 120, date: "01/07/2020", hour: "13:40" },
//     {id: 3, title: 'Medição de glicose', description: 'Descrição do registro', value: 120, date: "01/07/2020", hour: "13:40" },
//     {id: 4, title: 'Medição de glicose', description: 'Descrição do registro', value: 120, date: "01/07/2020", hour: "13:40" },
//     {id: 5, title: 'Medição de glicose', description: 'Descrição do registro', value: 120, date: "01/07/2020", hour: "13:40" },
// ];





// modificar os tipos de id, date e hour 

export interface HistoryItem{
    id: number,
    title: string,
    description: string,
    value: number,
    date: string,
    time: string,
}
export function HistoryBox(){
    const history = useHistoryList((state)=> state.historyList)
    return(
        
        <Container>
            <HistoryContainer>
                <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
          data={history}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
                <Box>
                    <LeftView>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <ValueBox>
                            <ValueText>{item.value}</ValueText>
                        </ValueBox>
                    </LeftView>
                    <RightView>
                        <DateText>{item.date}</DateText>
                        <HourText>{item.time}</HourText>
                        <DeleteButton><DeleteIcon/></DeleteButton>
                    </RightView>

                </Box>
            )}
            />
            </HistoryContainer>
            

        </Container>
        
        
    )
}