import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function RegistroUsuarioScreen() {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [concontraseña, setconcontraseña] = useState("");

  const [visible, setvisible] = useState(false);
  const [datos, setdatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
  });

  function guardar() {
    if (contraseña !== concontraseña) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    setdatos({
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: email.trim(),
      telefono: telefono,
      contraseña: contraseña,
    });

    Alert.alert("Registro exitoso", "Usuario registrado correctamente");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={(texto) => setnombre(texto)}
      />
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        onChangeText={(texto) => setapellido(texto)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(texto) => setemail(texto)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Teléfono"
        style={styles.input}
        onChangeText={(texto) => settelefono(texto)}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        onChangeText={(texto) => setcontraseña(texto)}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        style={styles.input}
        onChangeText={setconcontraseña}
        secureTextEntry
      />

      <View style={styles.linea} />

      <View style={styles.view}>
        <Text style={styles.labelSwitch}>Aceptar condiciones</Text>
        <Switch value={visible} onValueChange={() => setvisible(!visible)} />
      </View>

      {visible && datos && (
        <View style={styles.datosBox}>
          <Text style={styles.txt}>Nombre: {datos.nombre}</Text>
          <Text style={styles.txt}>Apellido: {datos.apellido}</Text>
          <Text style={styles.txt}>Email: {datos.email}</Text>
          <Text style={styles.txt}>Teléfono: {datos.telefono}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#6a1b9a" onPress={guardar} />
      </View>
    </View>
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
    elevation: 3, // sombra en Android
    shadowColor: "#000", // sombra en iOS
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
