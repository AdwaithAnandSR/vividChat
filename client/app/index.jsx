import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import healthCheck from "../utils/server/healthCheck.js";

export default function Index() {
   useEffect(() => {
      let isMounted = true;
      const initilizeApp = async () => {
         if (isMounted && (await healthCheck())) {
            const userId = await AsyncStorage.getItem("userId");
            if (userId) router.push("(tabs)");
            else router.push("Auth");
         } else if (isMounted) setTimeout(initilizeApp, 10000);
      };
      initilizeApp();

      return () => (isMounted = false);
   }, []);
   return (
      <SafeAreaView className='w-full h-full bg-zinc-950 flex justify-center items-center'>
         <Text className='text-white text-7xl font-black'>vividChat</Text>
      </SafeAreaView>
   );
}
