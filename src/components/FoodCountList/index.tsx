import { FlatList } from "react-native";
import { Box, Container, DeleteButton, DeleteIcon, FoodCHO, FoodCHOBox, FoodDescription, FoodListContainer, FoodName, MinusIcon, MinusQttButton, PlusQttButton, PlusQttIcon, QttBox, QttDeleteContainer, QttText } from "./styles";
import { ProductCartProps, useCartStore } from "src/count/coutList";
import { ListsButton } from "@components/ListsButton";
import { colorCHO, FoodItem } from "@components/FoodBox";



export function FoodCountList() {
  const foodList = useCartStore((state) => state.products)

  const handleQtt = useCartStore()

  const handleMinusPress = (item: ProductCartProps) => {
    handleQtt.remove(item)
    console.log("Removido")
    
  };
  const handlePlusPress = (item: ProductCartProps) => {
    handleQtt.increment(item)
    console.log("Adicionado")
    
  };
    
  return(
    <Container>
        <FoodListContainer>
          <FlatList
          contentContainerStyle={{ paddingBottom: 65 }}
          data={foodList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box>
              <FoodName>{item.name}</FoodName>
              <FoodDescription>{item.quantity}</FoodDescription>
              <QttDeleteContainer>
                <QttBox>
                  <MinusQttButton onPress={()=> handleMinusPress(item)}><MinusIcon></MinusIcon></MinusQttButton>
                  
                  <QttText>{item.quantidade}</QttText>
                  <PlusQttButton onPress={()=> handlePlusPress(item)}><PlusQttIcon></PlusQttIcon></PlusQttButton>
                </QttBox>
                <DeleteButton><DeleteIcon/></DeleteButton>
              </QttDeleteContainer>
              
              <FoodCHOBox
              backgroundColor={colorCHO(item.cho).bgColor}
              borderColor={colorCHO(item.cho).borderColor}
              >
                <FoodCHO style={{color: `${colorCHO(item.cho).textColor}`}}>{item.cho} CHO (g)</FoodCHO>
              </FoodCHOBox>
              
            </Box>
          )}
          />
        </FoodListContainer>
      </Container>
  )
}