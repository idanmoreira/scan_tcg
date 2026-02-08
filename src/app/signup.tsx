import { Link } from "expo-router"
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Alert, Platform } from "react-native"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export default function SignUp() {

function handleSignUp() {
  Alert.alert("Cadastrar","Cadastrando...")
}


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: "height" })}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"
    showVerticalScrollIndicator={false}>
    
    <View style={styles.container}>
      <Image 
        source={require("@/assets/img2.png")}
        style={styles.illustration}
      />
      
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.subtitle}>
        Crie sua conta começe sua coleção.
      </Text>

    <View style={styles.form}>
      <Input placeholder="Nome"/>
       <Input placeholder="E-mail" keyboardType="email-address"/>
      <Input placeholder="Senha" secureTextEntry/>
      <Input placeholder="Confirmar Senha" secureTextEntry/>
      <Button label="Cadastrar" onPress={handleSignUp}/>
    </View>

    <Text style={styles.footerText}>
      já tem uma conta? {" "}
      <Link href="/" style={styles.footerLink}>Entrar aqui.</Link>
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

