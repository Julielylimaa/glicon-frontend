import { FlatList } from "react-native";
import { Box, Container, DeleteButton, DeleteIcon, FoodCHO, FoodCHOBox, FoodDescription, FoodListContainer, FoodName } from "./styles";
import { useCartStore } from "src/count/coutList";
import { ListsButton } from "@components/ListsButton";



export function FoodCountList() {
  const foodList = useCartStore((state) => state.products)
    
  return(
    <Container>
        <FoodListContainer>
          <FlatList
          contentContainerStyle={{ paddingBottom: 55 }}
          data={foodList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box>
              <FoodName>{item.name}</FoodName>
              <FoodDescription>{item.quantity}</FoodDescription>
              <FoodCHOBox>
                <FoodCHO>{item.cho} CHO (g)</FoodCHO>
              </FoodCHOBox>
              <DeleteButton><DeleteIcon/></DeleteButton>
            </Box>
          )}
          />
        </FoodListContainer>
      </Container>
  )
}