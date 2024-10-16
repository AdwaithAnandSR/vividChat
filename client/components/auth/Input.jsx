import React, { useEffect } from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({ title, value, setValue }) => {
   return (
      <View className='border border-white rounded-xl h-[7.5vh] my-3 mx-2 relative'>
         <View className='absolute items-start -mt-4 ml-4'>
            <Text className='text-white text-xl bg-zinc-950 opacity-[0.85]'>
               {title}
            </Text>
         </View>
         <TextInput
            value={value}
            keyboardType={title === "email" ? "email-address" : null}
            onChangeText={txt => setValue(txt)}
            secureTextEntry={title === "password" ? true : false}
            className='w-full h-full text-white px-4 text-xl'
         />
      </View>
   );
};

export default React.memo(Input);
