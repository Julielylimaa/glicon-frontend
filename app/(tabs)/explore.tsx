import { ActivityIndicator } from "react-native"
import { ThemeProvider } from "styled-components"

import theme from "@theme/index"
import { useFonts, RobotoCondensed_400Regular, RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed"
import { HistoryRoutes } from "@routes/app.routes"


export default function TabTwoScreen() {
  
  const [fontsLoaded] = useFonts({RobotoCondensed_400Regular, RobotoCondensed_700Bold})



  return (
    <ThemeProvider  theme={theme}>
      {/* <StatusBar/> */}
      { fontsLoaded ? <HistoryRoutes/> : <ActivityIndicator/> }
    </ThemeProvider>
    
  
  );
}



