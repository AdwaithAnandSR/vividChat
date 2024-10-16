import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import Input from "./Input.jsx";
const api = Constants.expoConfig.extra.api;

const Signin = ({ setIsNewUser }) => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [message, setMessage] = useState();

   const handleSignin = async () => {
      setMessage(
         <Text className='text-green-500 mx-auto'>please wait...</Text>
      );

      if (username?.trim().length < 5 || password?.trim().length < 5)
         return setMessage(
            <Text className='text-red-500 mx-auto'>
               required atleast 5 charectors!
            </Text>
         );

      try {
         const res = await axios.post(`${api}/auth/signin`, {
            username,
            password
         });
         if (res.status === 200) {
            await AsyncStorage.setItem("userId", res.data.userId);
            await AsyncStorage.setItem("username", res.data.username);
            router.push("(tabs)");
            return setMessage(
               <Text className='text-green-500 mx-auto'>
                  Authentication successfull.
               </Text>
            );
         }
      } catch (error) {
         if (error.response)
            return setMessage(
               <Text className='text-red-500 mx-auto'>
                  {error.response.data.message}
               </Text>
            );
         else {
            console.log(error);
            return setMessage(
               <Text className='text-red-500 mx-auto'>{error.message}</Text>
            );
         }
      }
   };

   return (
      <View className='w-full h-full'>
         <Text className='font-black tracking-tight text-white mx-auto mt-[12vh] mb-[10vh] text-5xl'>
            Signin
         </Text>
         <Input value={username} setValue={setUsername} title='username' />
         <Input value={password} setValue={setPassword} title='password' />

         {message}

         <TouchableOpacity
            onPress={handleSignin}
            className='bg-orange-600 w-[70%] h-[6vh] mx-auto my-[5vh] flex items-center justify-center rounded-3xl'>
            <Text className='font-black tracking-tight text-white text-2xl'>
               Signin
            </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => setIsNewUser(true)} className=''>
            <Text className='text-white text-[4vw] text-center'>
               don't have an account? signup.
            </Text>
         </TouchableOpacity>
      </View>
   );
};

export default Signin;
