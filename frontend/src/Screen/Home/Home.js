import { StyleSheet, Text, View, Button, PixelRatio } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
//import { useVideoPlayer, VideoView } from "expo-video";
import Header from "../Header/Index";
import Footer from "../Footer/Index";

const videoSource = require("../assets/home.mp4");
const Home = (props) => {
  const { UserLogOut } = useContext(AuthContext);

  // const ref = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const player = useVideoPlayer(videoSource, (player) => {
  //   player.loop = true;
  //   player.play();
  // });

  // useEffect(() => {
  //   const subscription = player.addListener("playingChange", (isPlaying) => {
  //     setIsPlaying(isPlaying);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, [player]);

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingTop: 30,
      }}
    >
      <Header />
      {/* <VideoView
        ref={ref}
        style={{
          width: 350,
          height: 275,
        }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      /> */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 3,
    padding: 5,
    marginLeft: 35,
    height: 100,
    width: 120,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    fontSize: 24,
    paddingTop: 10,
  },
});

export default Home;
