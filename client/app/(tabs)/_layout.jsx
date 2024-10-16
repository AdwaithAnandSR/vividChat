import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, FontAwesome6 } from "@expo/vector-icons";

const Layout = () => {
   return (
      <SafeAreaView className='w-full h-full bg-zinc-950'>
         <Tabs
            screenOptions={{
               headerShown: false,
               tabBarShowLabel: false,
               tabBarStyle: {
                  backgroundColor: "black",
                  height: 65
               }
            }}>
            <Tabs.Screen
               name='index'
               options={{
                  title: "Chats",
                  tabBarIcon: ({ focused }) => (
                     <View className='flex justify-center items-center gap-1'>
                        <FontAwesome6 size={22} name='comment' color='white' />
                        <Text className='text-white'>{"Chats"}</Text>
                     </View>
                  )
               }}
            />
         </Tabs>
      </SafeAreaView>
   );
};

export default Layout;
