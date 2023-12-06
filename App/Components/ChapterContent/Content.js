import { View, Text } from 'react-native'
import React from 'react'
import ProgressBar from './ProgressBar'

export default function Content({content}) {
  return (
    <View style={{padding:0 , height:'100%'}}>
        <ProgressBar 
        contentLength={content?.length}
        contentIndex={1}
        />
      <Text>Content</Text>
    </View>
  )
}