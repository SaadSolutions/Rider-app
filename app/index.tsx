import { View, Text, SafeAreaView } from "react-native";
import { Redirect } from "expo-router";
import "../global.css";

export default function Index() {
  return <Redirect href="/(auth)/welcome" />;
}
