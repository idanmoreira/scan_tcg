import { Link } from "expo-router"
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export default function SignUp() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: "height" })}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
      <Image 
        source={require("@/assets/img2.png")}
        style={styles.illustration}
      />
      
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.subtitle}>
        Crie sua conta para começar a scanear suas cartas.
      </Text>

    <View style={styles.form}>
      <Input placeholder="E-mail" keyboardType="email-address"/>
      <Input placeholder="Senha" secureTextEntry/>
      <Button label="Entrar"/>
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

