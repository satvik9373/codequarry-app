import { View, Text } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

export default function ProgressBar({ contentLength, contentIndex }) {
  const arraySize =Array.from({ length: contentLength }, (_, index) => index + 1);
  const width = 100 / contentLength;

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}> 
      {arraySize.map((item, index) => (
        <View key={index} style={{ backgroundColor: Colors.SECONDARY, width: width, borderRadius: 10, height: 10, margin: 5 }}>
        </View>
      ))}
    </View>
  );
}
