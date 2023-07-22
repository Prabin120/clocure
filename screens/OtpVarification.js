import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useRegisterUserMutation } from "../services/userAuthApi";
import { storeToken } from "../services/AsyncStorageService";

function OtpVarification({route}) {
  const { mobileNumber } = route.params;
  const insets = useSafeAreaInsets();
  const [otp, setOtp] = React.useState("");  
  const navigation = useNavigation(); // Access the navigation prop
  const [registerUser] = useRegisterUserMutation();
  const handleFormSubmit = async () => {
    const formData = {
        mobile:mobileNumber,
      token: otp,
    };
    const endPoint = "auth/token/";
    const data = {
      formData: formData,
      endPoint: endPoint,
    };
    const res = await registerUser(data);
    if (res.data) {
        console.log(res.data)
        await storeToken(res.data.token)
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Chat' }],
            })
          );
    }
    if (res.error) {
      console.log("Response Error", res.error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "rgb(255,255,255)",
        minHeight: "100%",
      }}
    >
        <View className="px-2 py-5 bg-white flex flex-row justify-between">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className=""
            >
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold">Verify Phone</Text>
            <Text className="w-7"></Text>
        </View>
        <View className="p-3">
            <Text className="self-center text-lg text-gray-500 mt-2">Code is sent to {mobileNumber}</Text>
            <TextInput
                value={otp}
                onChangeText={otp => setOtp(otp)}
                mode='flat'
                placeholder="Enter the otp here"
                keyboardType='numeric'
                className="bg-white my-12"
            /> 
            <View className="flex flex-row self-center">
                <Text className="">Didn't receive code? </Text>
                <TouchableOpacity>
                    <Text className="font-bold">Request again</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                className="w-full rounded-sm mt-8 py-4 self-center bg-purple-400"
                onPress={handleFormSubmit}   
            >
                <Text className="text-white font-bold text-sm self-center">Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default OtpVarification;
