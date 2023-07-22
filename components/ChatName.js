import React from 'react'
import { Image } from 'expo-image'
import {Text, TouchableOpacity, View } from 'react-native'

export default function ChatName({name,img,navigation}){
  return (
    <TouchableOpacity 
      className="py-2 my-[1px] bg-slate-50 border-b-2 border-slate-100 flex flex-row justify-between"
      onPress={()=> navigation.navigate("ChatDetail",{id: name,navigation:navigation})}
    >
      <View className="flex-row gap-2 ">
          <Image
              // source={img ? { uri:toString(img) } : require('../assets/image2.jpg')}
              source={require('../assets/image2.jpg')}
              className="w-14 h-14 rounded-full"
          />
          <View className="flex items-start">
              <Text className="mb-1 mt-0 text-gray-950 font-bold text-lg">{name}</Text>
              <Text className="text-sm truncate">Greate That you are here</Text>
          </View>
      </View>
      <View>
          <Text className="text-xs mt-1">12:30 PM</Text>
          <View className="mx-auto mt-2 bg-green-600 w-6 h-6 rounded-full">
              <Text className="text-white text-xs m-auto">6</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}
