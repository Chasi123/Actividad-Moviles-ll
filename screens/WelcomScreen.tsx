import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomScreen({navigation}: any) {

  return (
    <View>
      <Text>WelcomScreen</Text>
      <Button 
      title="IR A LOGIN" 
      onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const styles = StyleSheet.create({});
