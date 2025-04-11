import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
