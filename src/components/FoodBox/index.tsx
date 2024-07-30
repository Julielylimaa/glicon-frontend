import { Button, FlatList, Text} from "react-native";
import { Box, Container, FoodCHO, FoodCHOBox, FoodDescription, FoodListContainer, FoodName, PlusButton, PlusIcon } from "./styles";
import theme from "@theme/index";
import { useCartStore } from "src/count/coutList";


const alimentos = [
    { id: 1, name: 'Arroz', quantity: '1 colher de sopa', unit: 'g', cho: 40 },
    { id: 2, name: 'Feijão', quantity: '1 concha', unit: 'g', cho: 55 },
    { id: 3, name: 'Batata', quantity: '1 unidade média', unit: 'g', cho: 20 },
    { id: 4, name: 'Maçã', quantity: '1 unidade média', unit: 'g', cho: 15 },
    { id: 5, name: 'Pão', quantity: '1 fatia', unit: 'g', cho: 25 },
    { id: 6, name: 'Arroz', quantity: '1 colher de sopa', unit: 'g', cho: 40 },
    { id: 7, name: 'Feijão', quantity: '1 concha', unit: 'g', cho: 30 },
    { id: 8, name: 'Batata', quantity: '1 unidade média', unit: 'g', cho: 20 },
    { id: 9, name: 'Maçã', quantity: '1 unidade média', unit: 'g', cho: 15 },
    { id: 10, name: 'Pão', quantity: '1 fatia', unit: 'g', cho: 25 },

];

export const colorCHO = (cho: number) => {
    let borderColor
    let bgColor
    let textColor

    if(cho <= 20) {
        borderColor = theme.COLORS.LIGHT_GREEN
        bgColor =  theme.COLORS.LIGHT_GREEN_2
        textColor = theme.COLORS.GREEN
        return {borderColor, bgColor, textColor}
    }
    if(cho > 20 && cho <=40) {
        borderColor = theme.COLORS.LIGHT_ORANGE
        bgColor =  theme.COLORS.LIGHT_RED_ORANGE
        textColor = theme.COLORS.ORANGE
        return {borderColor, bgColor, textColor}
    }

    borderColor = theme.COLORS.LIGHT_RED
    bgColor =  theme.COLORS.LIGHT_RED_ORANGE
    textColor = theme.COLORS.RED
    return {borderColor, bgColor, textColor}
}



export interface FoodItem {
    id: number;
    name: string;
    cho: number;
    quantity: string;
    unit: string;
  }


export function FoodBox(){
    const addFood = useCartStore()
    const foods = useCartStore((state)=> state.products)

    const handlePlusPress = (item: FoodItem) => {
        addFood.add(item)
        console.log(foods)
    };

    return(
        
        <Container>
            <FoodListContainer>
            <FlatList
            contentContainerStyle={{ paddingBottom: 55 }}
          data={alimentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box>
                <FoodName>{item.name}</FoodName>
                <FoodDescription>{item.quantity}</FoodDescription>
                <FoodCHOBox 
                    backgroundColor={colorCHO(item.cho).bgColor}
                    borderColor={colorCHO(item.cho).borderColor}>
                    <FoodCHO style={{color: `${colorCHO(item.cho).textColor}`}}>{item.cho} CHO (g)</FoodCHO>
                    </FoodCHOBox>
                <PlusButton onPress={() => handlePlusPress(item)}><PlusIcon/></PlusButton>
            </Box>
          )}
        />
        </FoodListContainer>
        
        </Container>
        
        
    )
}