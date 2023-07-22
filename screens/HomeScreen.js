import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ChatName from "../components/ChatName";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getToken } from "../services/AsyncStorageService";
import { useVerifyUserMutation } from "../services/userAuthApi";

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [registerUser] = useVerifyUserMutation();
  console.log("Its coming here in HomeScreen");
  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      console.log(token)
      const endPoint = "home/";
      if (token) {
        const data = {
          token: token,
          endPoint: endPoint,
        };
        const res = await registerUser(data);
        if (res.data) {
          return (
            <View
              className="p-2 bg-white"
              style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              }}
            >
              <View className="flex flex-row justify-between py-6 px-2">
                <View>
                  <Text className="font-light text-xs">Good Morning 🌞</Text>
                  <Text className="text-lg font-bold">Prabin Sharma</Text>
                </View>
                <View className="flex flex-row gap-1">
                  <TouchableOpacity className="bg-slate-200 border-2 border-slate-300 w-9 h-9 text-red-600 rounded-full flex justify-center items-center">
                    <EvilIcons name="search" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-slate-200 border-2 border-slate-300 w-9 h-9 text-red-600 rounded-full flex justify-center items-center">
                    <Feather name="more-vertical" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView className="p-2">
                <ChatName
                  name={"Prabin Sharma"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Kuch Aur"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Main Don"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Meri Crush"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Bakchod Aadmi"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Prabin Sharma"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Kuch Aur"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Main Don"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Meri Crush"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Bakchod Aadmi"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Prabin Sharma"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Kuch Aur"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Main Don"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Meri Crush"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Bakchod Aadmi"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Prabin Sharma"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Kuch Aur"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Main Don"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
                <ChatName
                  name={"Meri Crush"}
                  img="../assets/image2.jpg"
                  navigation={navigation}
                />
                <ChatName
                  name={"Bakchod Aadmi"}
                  img="../assets/closure.png"
                  navigation={navigation}
                />
              </ScrollView>
            </View>
          );
        }
      } else {
        return navigation.navigate("Login");
      }
    };
    fetchData();
  }, []);
}
