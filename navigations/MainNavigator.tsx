import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";





import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FormularioScreen from "../screens/FormularioScreen";
import RegistroUsuarioScreen from "../screens/RegistroUsuarioScreen";
import FormularioDireccionScreen from "../screens/FormularioDireccionScreen";
import EncuestaSatisfaccionScreen from "../screens/EncuestaSatisfaccionScreen";
import ListaLocal from "../screens/listas/ListaLocal";
import ListaLocalExterna from "../screens/listas/ListaLocalExterna";
import ListaPrueba from "../screens/listas/ListaPrueba";

const Top = createMaterialTopTabNavigator();
function MyTop (){
    return(
        <Top.Navigator>
            <Top.Screen name="Local" component={ListaLocal}/>
            <Top.Screen name="Externo" component={ListaLocalExterna}/>
            <Top.Screen name="Prueba" component={ListaPrueba}/> 
        </Top.Navigator>
    )
}


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcom" component={WelcomScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Tab.Screen
                name="IMC"
                component={IMCScreen} />
            <Tab.Screen
                name="Calculadora"
                component={CalculadoraScreen}
                options={{ tabBarIcon: () => <MaterialIcons name="calculate" size={24} color="black" /> }} />
            <Stack.Screen name="Tabs" component={MyTabs} />

            <Tab.Screen name="Formulario" component={FormularioScreen} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Top">
            <Tab.Screen name="Welcom" component={WelcomScreen}
                options={{ tabBarIcon: () => <MaterialCommunityIcons name="human-greeting-variant" size={24} color="black" /> }} />


            <Tab.Screen
                name="Regsitro"
                component={RegistroUsuarioScreen}
                options={{ tabBarIcon: () => <AntDesign name="adduser" size={24} color="black" /> }}
            />
            <Tab.Screen
                name="Formulario "
                component={FormularioDireccionScreen}
                options={{ tabBarIcon: () => <AntDesign name="form" size={24} color="black" /> }}
            />
            <Tab.Screen
                name="Encuesta"
                component={EncuestaSatisfaccionScreen}
                options={{ tabBarIcon: () => <AntDesign name="checkcircle" size={24} color="black" /> }}
            />
            <Tab.Screen name="Top" component={MyTop}/>
        </Tab.Navigator>
    );
}
export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>

    )

}
