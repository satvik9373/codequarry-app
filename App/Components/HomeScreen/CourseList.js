import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '../../Services';
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({ level }) {
  const [courseList, setCourseList] = useState([]);
  const navigation=useNavigation();

  useEffect(() => {
    getCourses();
  }, [level]);

  const getCourses = () => {
    getCourseList(level).then(resp => {
      console.log("RESP--", resp);
      setCourseList(resp?.courses || []);
    });
  };

  return (
    <View>
      <SubHeading text={level+' Courses'} color={level=='Basic'&&Colors.WHITE} />
      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id.toString()} // Corrected keyExtractor
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>navigation.navigate('course-detail',{
            course:item
          })}>
              <CourseItem  item={item}/>
         </TouchableOpacity>
        )}
      />
    </View>
  );
}
