import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
   return (
      <SafeAreaView className='w-full h-full bg-zinc-950'>
         <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='Auth' />
         </Stack>
      </SafeAreaView>
   );
}
