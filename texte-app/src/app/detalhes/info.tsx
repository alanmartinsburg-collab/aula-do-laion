import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DetalhesInfoPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
        <Text style={styles.textBotao}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Mais informações sobre a Copa</Text>

      <Text style={styles.subtitulo}>
        A Copa do Mundo é o maior torneio internacional de futebol, organizado pela FIFA. A cada quatro anos, seleções de todo o mundo se enfrentam em busca do troféu.
      </Text>
      <Text style={styles.subtitulo}>
        O torneio começou em 1930 no Uruguai, e desde então já passou por diversos países-sede. Além do título, é uma celebração cultural que une torcedores de todos os continentes.
      </Text>
      <Text style={styles.subtitulo}>
        Nas fases finais, os jogos são eliminatórios e a tensão aumenta a cada partida. Muitos jogadores fazem história e cada edição fica marcada por momentos inesquecíveis.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312f2f",
    padding: 20,
    alignItems: "center",
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
    marginTop: 20,
    marginBottom: 30,
  },
  textBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 14,
    color: "#CCCCCC",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 320,
    marginBottom: 16,
  },
});
