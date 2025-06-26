import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function FormularioDireccionScreen() {
  const [calle, setcalle] = useState("");
  const [numeroEx, setnumeroEx] = useState("");
  const [ciudad, setciudad] = useState("");
  const [referencia, setreferencia] = useState("");
  
  const [esFiscal, setesFiscal] = useState(false); 

  const [datos, setdatos] = useState({
    calle: "",
    numeroEx: "",
    ciudad: "",
    referencia: "",
    esFiscal: false,
  });

  function guardar() {
    if (!calle.trim() || !numeroEx.trim() || !ciudad.trim()) {
      Alert.alert("Campos obligatorios", "Calle, Número Exterior y Ciudad son obligatorios.");
      return;
    }

    if (!/^\d+$/.test(numeroEx)) {
      Alert.alert("Error", "Número Exterior debe contener solo números.");
      return;
    }

    setdatos({
      "calle": calle.trim(),
      "numeroEx": numeroEx.trim(),
      "ciudad": ciudad.trim(),
      "referencia": referencia.trim(),
      "esFiscal":esFiscal,
    });

    Alert.alert("Registro exitoso", "Dirección registrada correctamente");
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario Dirección</Text>

      <TextInput
        placeholder="Calle"
        style={styles.input}
        onChangeText={setcalle}
        value={calle}
      />
      <TextInput
        placeholder="Número Exterior"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(texto) => {
          if (/[^0-9]/.test(texto)) {
            Alert.alert("Solo números", "Número Exterior debe ser solo nuemeros");
          }
          setnumeroEx(texto.replace(/[^0-9]/g, ""));
        }}
        value={numeroEx}
      />
      <TextInput
        placeholder="Ciudad"
        style={styles.input}
        onChangeText={setciudad}
        value={ciudad}
      />
      <TextInput
        placeholder="Referencias (opcional)"
        style={styles.input}
        onChangeText={setreferencia}
        value={referencia}
      />

      <View style={styles.linea} />

      <View style={styles.view}>
        <Text style={styles.labelSwitch}>¿Es dirección fiscal?</Text>
        <Switch value={esFiscal} onValueChange={() => setesFiscal(!esFiscal)} />
      </View>

      {esFiscal && datos && (
      <View style={styles.datosBox}>
        <Text style={styles.txt}>Calle: {datos.calle}</Text>
        <Text style={styles.txt}>N° Exterior: {datos.numeroEx}</Text>
        <Text style={styles.txt}>Ciudad: {datos.ciudad}</Text>
        {datos.referencia !== "" && (
          <Text style={styles.txt}>Referencias: {datos.referencia}</Text>
        )}
        <Text style={styles.txt}>
           Dirección fiscal: {datos.esFiscal ? "Sí" : "No"}
        </Text>
      </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#6a1b9a" onPress={guardar} />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e5f5", // fondo lila claro
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  titulo: {
    fontSize: 48,
    color: "#6a1b9a",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    backgroundColor: "#fff",
    width: "90%",
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "80%",
    marginVertical: 20,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  labelSwitch: {
    fontSize: 20,
    color: "#333",
  },
  txt: {
    fontSize: 18,
    color: "#444",
    marginVertical: 2,
  },
  datosBox: {
    marginTop: 10,
    backgroundColor: "#e1bee7",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  buttonContainer: {
    marginTop: 25,
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
