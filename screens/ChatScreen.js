import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SendMessage, { ReceivedMessage } from '../components/MessageText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ChatScreen({route}) {
  const insets = useSafeAreaInsets();
    return (
      <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "white",
      }}
      >
        <View className="px-2 py-2 bg-white flex flex-row justify-between items-center">
          <View className="flex flex-row justify-start gap-3 items-center">
            <TouchableOpacity 
              onPress={()=> route.params.navigation.goBack()}
              className="py-3"
            >
              <AntDesign name="arrowleft" size={24} color="black"/>
            </TouchableOpacity>
            <Image
                // source={img ? { uri:toString(img) } : require('../assets/image2.jpg')}
                source={require('../assets/image2.jpg')}
                className="w-12 h-12 rounded-full"
                />
            <View>
              <Text className="font-bold text-lg">{route.params.id}</Text>
              <Text className="text-xs">Online</Text>
            </View>
          </View>
          <View className="flex flex-row gap-3">
            <TouchableOpacity>
              <Ionicons name="call-outline" size={24} color="rgb(156 163 175)" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="rgb(156 163 175)" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView >
            <SendMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is prabin"} />
            <ReceivedMessage message={"Hi! This is prabin"} />
            <SendMessage message={"Hi! This is rabin"} />
        </ScrollView>

        <View>
          <Text>Message Typing</Text>
        </View>
      </View>
    )
  };

