import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';



export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params = useRoute().params;
  const [userEnrolledCourse,setUserEnrolledCourse]=useState([]);
  const {user}=useUser();

  useEffect(()=>{

    if(user&&params.course)
    {
      GetUserEnrolledCourse();
    }
  },[params.course,user])


  const UserEnrollCourse=()=>{
    enrollCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      // console.log("--",resp);
      if(resp)
{
  ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);
  GetUserEnrolledCourse();
}
        
      });
  }

  const GetUserEnrolledCourse=()=>{
    getUserEnrolledCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      //console.log("--",resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses)
    })
  } 

  return params.course&&(
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="ios-arrow-back-circle" 
      size={40} color="black" />
       </TouchableOpacity>
        <DetailSection course={params.course} 
        userEnrolledCourse={userEnrolledCourse}
        enrollCourse={()=>UserEnrollCourse()} />
     <ChapterSection chapterList={params.course.chapters}
     userEnrolledCourse={userEnrolledCourse}/>

    </ScrollView>
  )
}