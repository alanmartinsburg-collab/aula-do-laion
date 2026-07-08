import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function BrasilPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.flagEmoji}>🇧🇷</Text>
        <Text style={styles.titulo}>Brasil</Text>
        <Text style={styles.subtitle}>Página especial do Brasil</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Esta é uma página dedicada ao Brasil. Aqui você pode mostrar conteúdo
          exclusivo, estatísticas, ou qualquer outra coisa específica para o país.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312f2f",
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#454545",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flagEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 20,
    textAlign: "center",
  },
  divider: {
    width: 100,
    height: 2,
    backgroundColor: "#ae4444",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#CCCCCC",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
});
