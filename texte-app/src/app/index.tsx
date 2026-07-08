import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";


export default function Index() {
  const router = useRouter();

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

  const handleCountryPress = (country: Country) => {
    router.push(`/detalhes/preview/${country.id}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Quem vai ganhar a Copa</Text>
        <Text style={styles.subtitle}>Da tua opinião de bosta (a não ser que seja o brasil)</Text>

        <View style={styles.gridContainer}>
          {countries.map((country) => (
            <TouchableOpacity
              key={country.id}
              style={styles.countryButton}
              onPress={() => handleCountryPress(country)}
            >
              <Text style={styles.flagEmoji}>{country.flag}</Text>
              <Text style={styles.countryName}>
                {country.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => router.push("/detalhes")}>
          <Text style={styles.textBotao}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312f2f",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 30,
    textAlign: "center",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginBottom: 30,
    width: "100%",
  },
  countryButton: {
    width: "45%",
    backgroundColor: "#454545",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  flagEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  countryName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
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
  },
});
