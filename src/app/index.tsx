import { View, Text, StyleSheet, Image } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/img1.png")}
      style={styles.illustration}
      />
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acessar agora com e-mail e senha.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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


  }
})

