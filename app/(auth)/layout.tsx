import { Stack } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.

const layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};
export default layout;
