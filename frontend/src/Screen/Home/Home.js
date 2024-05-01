import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext}  from 'react'
import LandingPageButton from '../../LoginAndSignup/LandingPageButton'
import { AuthContext } from "../../Context/AuthContext";

export default function Home() {

    const {UserLogOut} = useContext(AuthContext);


  return (
    <View>
      <Text>Home</Text>
      <LandingPageButton 
         textColor="white"
            bgColor={darkGreen}
            btnLabel={"Login"}
            press={() => {UserLogOut()}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})