import { useState } from "react" 
import { Link } from "expo-router"
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Alert, Platform } from "react-native"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export default function Index() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function handleLogin() {
if(!email.trim() || !password.trim()) {
  return Alert.alert("Entrar", "Preencha todos os campos.")
}

Alert.alert("Bem vindo", `Login realizado com ${email}`)
 
}

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: "height" })}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"
    showVerticalScrollIndicator={false}
    >
    
    <View style={styles.container}>
      <Image 
        source={require("@/assets/img1.png")}
        style={styles.illustration}
      />
      
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>
        Acessar agora com e-mail e senha.
      </Text>

    <View style={styles.form}>
      <Input 
      placeholder="E-mail" 
      keyboardType="email-address"
      onChangeText={setEmail}
      />

      <Input 
      placeholder="Senha" 
      secureTextEntry 
      onChangeText={setPassword}
      />

      <Button label="Entrar" onPress={handleLogin} />
    </View>

    <Text style={styles.footerText}>
      Não tem um conta? {" "}
      <Link href="/signup" style={styles.footerLink}>Cadastrar aqui.</Link>
    </Text>
  </View>
  </ScrollView>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  containwer: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    padding: 32,
  },
  illustration: {
    width: '100%',
    height: 330,
    resizeMode: 'contain',
    marginTop: 62,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16,
  },
  form: {
    marginTop: 24,
    gap: 14,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: "#585860",
  },
  footerLink: {
    color: "#0026cf",
  },
})

