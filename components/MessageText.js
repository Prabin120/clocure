import React from 'react'
import { Text, View } from 'react-native'

function SendMessage({message}) {
    return (
        <View className="m-2 flex justify-end">
            <Text className="p-3 rounded-xl max-w-[80%] self-end bg-blue-500 text-white"> {message} </Text>
            <View className="flex self-end gap-2">
                <Text className="text-[10px] text-slate-500 pr-[5px]">08:21 pm</Text>
                {/* <Text></Text> */}
            </View>
        </View>
    )
}

function ReceivedMessage({message}){
    return (
        <View className="m-2 flex justify-start">
            <Text className="p-3 rounded-xl max-w-[80%] self-start bg-slate-200 text-black"> {message} </Text>
            <View className="flex self-start gap-2">
                <Text className="text-[10px] text-slate-500 pl-[5px]">08:21 pm</Text>
                {/* <Text></Text> */}
            </View>
        </View>
    )
}

export default SendMessage
export {ReceivedMessage}