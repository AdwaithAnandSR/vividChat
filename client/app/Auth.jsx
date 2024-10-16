import { useState, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Signup from "../components/auth/Signup.jsx";
import Signin from "../components/auth/Signin.jsx";

const Auth = () => {
   const [isNewUser, setIsNewUser] = useState(false);
   return (
      <SafeAreaView className='w-full h-full bg-zinc-950'>
         {isNewUser ? <Signup setIsNewUser={setIsNewUser} /> : <Signin setIsNewUser={setIsNewUser} />}
      </SafeAreaView>
   );
};

export default Auth;
