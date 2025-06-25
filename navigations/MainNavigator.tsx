import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';


import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FormularioScreen from "../screens/FormularioScreen";
import RegistroUsuarioScreen from "../screens/RegistroUsuarioScreen";
import FormularioDireccionScreen from "../screens/FormularioDireccionScreen";

const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcom" component={WelcomScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Tabs" component={MyTabs}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function MyTabs(){
return (
    <Tab.Navigator 
    initialRouteName="RegsitroUsuario"
    screenOptions={{headerShown: false}}>
        {/* <Tab.Screen 
        name="Calculadora" 
        component={CalculadoraScreen} 
        options={{tabBarIcon: () => <MaterialIcons name="calculate" size={24} color="black" />  }}/> */}
        <Tab.Screen 
        name="IMC" 
        component={IMCScreen} />
        <Tab.Screen name="Formulario" component={FormularioScreen} />
        <Tab.Screen 
        name="RegsitroUsuario" 
        component={RegistroUsuarioScreen}
        options={{tabBarIcon: () => <AntDesign name="adduser" size={24} color="black" />}}
        />
        <Tab.Screen 
        name="Formulario direccion" 
        component={FormularioDireccionScreen}
        options={{tabBarIcon: () => <AntDesign name="adduser" size={24} color="black" />}}
        />
    </Tab.Navigator>
);
}
export default function NavegadorPrincipal(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    )

}
