import axios from "axios";
import Constants from "expo-constants";

const api = Constants.expoConfig.extra.api;

export default healthCheck = async () => {
   try {
      const res = await axios.get(`${api}/health`)
      if(res.status === 200) return true;
      else return false
   } catch (error) {
      console.log(error);
   }
};
