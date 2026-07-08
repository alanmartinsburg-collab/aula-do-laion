import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

type Country = {
  id: number;
  name: string;
  flag: string;
};

export default function DetalhesPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const countries: Country[] = [
    { id: 1, name: "Brasil", flag: "🇧🇷" },
    { id: 2, name: "Argentina", flag: "🇦🇷" },
    { id: 3, name: "França", flag: "🇫🇷" },
    { id: 4, name: "Alemanha", flag: "AL" },
    { id: 5, name: "Espanha", flag: "🇪🇸" },
    { id: 6, name: "Inglaterra", flag: "🇬🇧" },
    { id: 7, name: "Itália", flag: "🇮🇹" },
    { id: 8, name: "Portugal", flag: "🇵🇹" },
  ];

  const country = countries.find((c) => c.id === parseInt(id, 10));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.flagEmoji}>{country?.flag}</Text>
        <Text style={styles.titulo}>{country?.name}</Text>
        <Text style={styles.subtitle}>Detalhes do país</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          ta ai os detalhes do {country?.name} se tu escolheu o Brasil vc é legal, se nao se mata
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
