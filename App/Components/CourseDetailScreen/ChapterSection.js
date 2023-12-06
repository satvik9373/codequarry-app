import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({ chapterList,userEnrolledCourse }) {
const navigation=useNavigation();
const OnChapterPress=(content)=>{
  if(userEnrolledCourse.length==0) 
  {
    ToastAndroid.show('Please Enroll Course!',ToastAndroid.LONG)
    return ;
  }
  else{
navigation.navigate('chapter-content',{
content:content
})
  }
}

  return chapterList && (
    <View style={{ padding: 10, backgroundColor: Colors.WHITE, marginTop: 15, borderRadius: 15 }}>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 22 }}>Chapters</Text>
      {chapterList.map((item, index) => (
        <TouchableOpacity key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderWidth: 1, borderRadius: 10, marginTop: 10, borderColor: Colors.GRAY }} 
        onPress={()=>OnChapterPress(item.content)}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={{ fontFamily: 'outfit-medium', fontSize: 27, color: Colors.GRAY }}>{index + 1}</Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 21, color: Colors.GRAY }}>{item.title}</Text>
          </View>
         {userEnrolledCourse.length==0? 
         <FontAwesome name="lock" size={25} color={Colors.GRAY} />
:
<FontAwesome name="play" size={25} color={Colors.GRAY} />
}
        </TouchableOpacity>
      ))}
    </View>
  );
}
