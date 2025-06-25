import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import { NavigationContainer } from "@react-navigation/native";
import IMCScreen from "../screens/IMCScreen";

const Tab = createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator initialRouteName="Login" >
            <Tab.Screen 
            name="Welcome" 
            component={WelcomScreen} 
            options={{headerShown: false}}/>
            <Tab.Screen 
            name="Login"
            component={LoginScreen} />
            <Tab.Screen 
            name="Calculadora" 
            component={CalculadoraScreen} />
            <Tab.Screen 
            name="IMC" 
            component={IMCScreen} />
        </Tab.Navigator>    
    )
}

export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    )
}