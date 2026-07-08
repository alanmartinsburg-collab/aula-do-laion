import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    
    <Stack 
    screenOptions={{
      headerStyle: {backgroundColor:"#ae4444"},
      headerTintColor: "#fff",
      headerTitleStyle: {fontWeight:"700"}
    }}
    >
      <Stack.Screen name="index" options={{title: 'Home'}} />
      <Stack.Screen name="detalhes" options={{title: 'Detalhes'}} />
    </Stack>

  );
}
