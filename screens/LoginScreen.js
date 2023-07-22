import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useRegisterUserMutation } from "../services/userAuthApi";

export default function ChatScreen({ navigation, phone_number }) {
  const insets = useSafeAreaInsets();
  const [number, setNumber] = React.useState("");
  const [code, setCode] = React.useState("");

  const [registerUser] = useRegisterUserMutation();
  const handleFormSubmit = async () => {
    const mobileNumber = code.toString() + number.toString();
    const formData = {
      mobile: mobileNumber,
    };
    const endPoint = "auth/mobile/";
    const data = {
      formData: formData,
      endPoint: endPoint,
    };
    const res = await registerUser(data);
    if (res.data) {
      navigation.navigate("OtpVarification", {
        mobileNumber: mobileNumber,
      });
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
      <View className="h-full">
        <Image
          source={require("../assets/closure.png")}
          className="h-[50%] w-full object-cover sm:h-[30%]"
        />
        <View className="p-4 mt-4">
          <Text className="text-lg font-bold">Enter your Mobile Number</Text>
          <Text className="mt-2 text-xs text-slate-400">
            Please confirm your country code and
          </Text>
          <Text className="text-xs text-slate-400">
            enter your mobile number
          </Text>
          <View className="flex flex-row gap-1 my-6">
            <TextInput
              label="Country Code"
              mode="flat"
              value={code}
              onChangeText={(code) => setCode(code)}
              className="bg-white w-[20%]"
            />
            <TextInput
              label="Mobile number"
              value={number}
              onChangeText={(number) => setNumber(number)}
              mode="flat"
              keyboardType="numeric"
              className="bg-white w-[78%]"
            />
          </View>
          <TouchableOpacity
            className="w-full rounded-sm mt-8 py-4 self-center bg-purple-400"
            onPress={handleFormSubmit}
          >
            <Text className="text-white font-bold text-sm self-center">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
