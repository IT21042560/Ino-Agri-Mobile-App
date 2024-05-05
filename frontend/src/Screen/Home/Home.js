import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext}  from 'react'
import LandingPageButton from '../../LoginAndSignup/LandingPageButton'
import { AuthContext } from "../../Context/AuthContext";

const Home = (props) => {

    const {UserLogOut} = useContext(AuthContext);


  return (
    <View style={{ alignItems: "center", width: 400 }}>
      <Text>Home</Text>
      <LandingPageButton 
         textColor="white"
            bgColor={'black'}
            btnLabel={"Logout"}
            press={() => {UserLogOut()}}
      />
      <LandingPageButton 
         textColor="white"
            bgColor={'black'}
            btnLabel={"Pest Detect"}
            press={() => props.navigation.navigate("PestDashboard")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home;
