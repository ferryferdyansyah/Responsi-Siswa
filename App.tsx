import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from './navigation/ButtomTabs'
import Welcom from "./screens/Welcom"
import Routes from './routes/routes'

const App = () => {
  return(
    <NavigationContainer>
      {/* <BottomTabs/> */}
      <Routes/>
    </NavigationContainer>
  )
}

export default App