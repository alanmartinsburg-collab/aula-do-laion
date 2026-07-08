import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

type Country = {
  id: number;
  name: string;
  flag: string;
};

const countries: Country[] = [
  { id: 1, name: "Brasil", flag: "🇧🇷" },
  { id: 2, name: "Argentina", flag: "🇦🇷" },
  { id: 3, name: "França", flag: "🇫🇷" },
  { id: 4, name: "Alemanha", flag: "🇩🇪" },
  { id: 5, name: "Espanha", flag: "🇪🇸" },
  { id: 6, name: "Inglaterra", flag: "🇬🇧" },
  { id: 7, name: "Itália", flag: "🇮🇹" },
  { id: 8, name: "Portugal", flag: "🇵🇹" },
];

function getCountryInitials(name: string) {
  const words = name.trim().split(" ");
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase();
  }
  return words.map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}

export default function CountryPreviewPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const country = countries.find((c) => c.id === parseInt(id, 10));

  if (!country) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>País não encontrado</Text>
      </View>
    );
  }

  const initials = getCountryInitials(country.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.initials}>{initials}</Text>
        <Text style={styles.subtitle}>Clique abaixo para ver os detalhes do país</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push(`/detalhes/${country.id}`)}
        >
          <Text style={styles.textBotao}>Detalhes do país</Text>
        </TouchableOpacity>
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
  initials: {
    fontSize: 96,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 30,
    textAlign: "center",
    maxWidth: 320,
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
    minWidth: 180,
  },
  textBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
});
