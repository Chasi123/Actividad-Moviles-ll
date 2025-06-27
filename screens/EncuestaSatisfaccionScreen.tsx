import {
    Button,
    ScrollView,
    ScrollViewComponent,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useState } from "react";
import {  RadioButton } from "react-native-paper";

export default function EncuestaSatisfaccionScreen() {
    const [contacto, setcontacto] = useState("");
    const [check, setcheck] = useState('')
    const [razon, setrazon] = useState('')
    const [permitirCo, setpermitirCo] = useState(false)
    



    const [visible, setvisible] = useState(false);
    const [datos, setdatos] = useState({
        contacto: "",
        permitirCo:false,
        razon: ""
    });

    function guardar() {
        setdatos({
            "contacto": contacto,
            "permitirCo": permitirCo,
            "razon": razon

        });
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titulo}>Encuesta</Text>

            <TextInput
                placeholder="Contacto"
                style={styles.input}
                onChangeText={(texto) => setcontacto(texto)}
            />
            <View>
                <Text style={styles.txtRadioButom}>¿Recomendarias nuestra app?</Text>
                <View style={styles.radioTxt}>
                    <RadioButton
                        value="si"
                        status={check === 'si' ? 'checked' : 'unchecked'}
                        onPress={() => setcheck('si')} />
                    <Text style={styles.txtRadioButom}>si</Text>
                </View>

                <View style={styles.radioTxt}>
                    <RadioButton
                        value="no"
                        status={check === 'no' ? 'checked' : 'unchecked'}
                        onPress={() => setcheck('no')} />
                    <Text style={styles.txtRadioButom}>no</Text>

                </View>

                <View style={styles.radioTxt}>
                <RadioButton
                    value="quizas"
                    status={check === 'quizas' ? 'checked' : 'unchecked'}
                    onPress={() => setcheck('quizas')} />
                    <Text style={styles.txtRadioButom}>quizas</Text>

                </View>

            </View>

            <TextInput
                placeholder="Razon"
                style={styles.input}
                onChangeText={(texto) => setrazon(texto)}
            />


            <View style={styles.linea} />

            <View style={styles.view}>
                <Text style={styles.labelSwitch}>Permitir contacto</Text>
                <Switch value={permitirCo} onValueChange={() => setpermitirCo(!permitirCo)} />
            </View>

            {contacto && datos && (
                <View style={styles.datosBox}>
                    <Text style={styles.txt}>contacto: {datos.contacto}</Text>
                    <Text style={styles.txt}>
                        Permitir contacto: {datos.permitirCo ? "Sí" : "No"}
                    </Text>
                    <Text style={styles.txt}>razon: {datos.razon}</Text>

                    <Text style={styles.txt}>
                        Recomendaria nuestra app?: {check}
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
        backgroundColor: "#f3e5f5",
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
    txtRadioButom: {

    },
    radioTxt: {
        flexDirection: "row",
        margin: 7,
        
        
    }
});
