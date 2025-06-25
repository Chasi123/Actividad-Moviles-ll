import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Switch, TextInput } from "react-native";

export default function FormularioScreen() {
    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)
    const [visible, setvisible] = useState(false)

    const [datos, setdatos] = useState({"usuario": "", "edad": 0} )

    function guardar () {
        setdatos({
            "usuario": usuario.trim(),
            "edad": edad
        })
    }
    return (
    <View style={styles.container}>
        <Text style={{ fontSize: 60 }}>Formulario</Text>
            <TextInput 
            placeholder="ingresar usuario" 
            style={styles.input} 
            onChangeText={(texto) => setusuario(texto)} />

            <TextInput 
            placeholder="ingresar usuario" 
            style={styles.input} 
            onChangeText={(texto) => setedad(parseInt(texto))}/>

            <Button title="Guardar" onPress={guardar}/>
            <View style={styles.linea}/>
            <Text style={{ fontSize: 30 }}> Ver Datos </Text>
                <Switch
                value={visible}
                onValueChange={() => setvisible(!visible)}
                />
            <View style={styles.linea}/>
            {visible == true
            ? <View>
                <Text style={styles.txt}>{datos.usuario}</Text>
                <Text style={styles.txt}>{datos.edad}</Text>
            </View>

            : <ActivityIndicator />
}
    </View>
);
}

const styles = StyleSheet.create({
    txt:{
        fontSize: 30

    },
    linea:{
        borderWidth: 1,
        width: "80%"

    },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 30,
    backgroundColor: "#f6d5ec",
    width: "60%",
    margin: 10,
  }
});
