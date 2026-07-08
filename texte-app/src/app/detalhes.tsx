import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function detalhes() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.textBotao}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.subtitulo}>A copa do mundo é um evento esportivo internacional que reúne seleções de futebol de diversos países para competir pelo título de campeão mundial.
         O torneio é organizado pela FIFA (Federação Internacional de Futebol) e ocorre a cada quatro anos, sendo considerado o maior e mais prestigioso campeonato de futebol do planeta.
         A primeira edição da Copa do Mundo foi realizada em 1930 no Uruguai, e desde então, o evento tem crescido em popularidade e importância, atraindo milhões de espectadores ao redor do mundo.
</Text>

      <TouchableOpacity style={[styles.linkbutton]} onPress={() => router.push('/detalhes/info')}>
        <Text style={styles.textBotao}>para mais informações clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  linkbutton: {


  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#312f2f",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitulo:{
    fontSize: 14,
    color: "#CCCCCC",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
  botao: {
    backgroundColor: "#ae4444",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 150,
  },
  textBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  }
});
