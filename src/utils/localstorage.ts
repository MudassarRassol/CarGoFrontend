import AsyncStorage from "@react-native-async-storage/async-storage"

const getlogin=async()=>{

    const login = await AsyncStorage.getItem('userlogin') || false; // Replace this with your actual auth logic
    return login

}


export {getlogin}