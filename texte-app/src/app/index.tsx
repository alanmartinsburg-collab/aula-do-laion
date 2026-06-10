import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hoje</Text>
      <Text style={styles.subtitulo}>Oi</Text>
      <TouchableOpacity
      style={styles.botao}
      onPress={router.push('/detalhes')}
      >
        <Text style={styles.textBotao}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
