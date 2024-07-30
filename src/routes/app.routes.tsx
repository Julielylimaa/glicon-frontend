import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { AddRecordHistory } from "@screens/AddRecordHistory";
import { FoodCount } from "@screens/FoodCount";
import { FoodList } from "@screens/FoodList";
import { HistoryScreen } from "@screens/HistoryScreen";

const { Navigator, Screen }= createNativeStackNavigator()

export function ListRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name = "list"
                component={FoodList}
            />
            <Screen name = "count"
                component={FoodCount}
            />
        </Navigator>
    )
}

export function HistoryRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name = "history"
                component={HistoryScreen}
            />
            <Screen name = "addRecord"
                component={AddRecordHistory}
            />
        </Navigator>
    )
}