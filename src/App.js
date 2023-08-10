import './App.css';
import {useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import * as fp from 'fingerpose';
import A from './assets/A.png';
import B from './assets/B.png';
import E from './assets/E.png';
import S from './assets/S.png';
import Q from './assets/Q.png';
// import U from './assets/u.png';
// import V from './assets/v.png';
// import W from './assets/w.png';
import {AlphaA} from './Signlanguage/AlphaA';
import {AlphaB} from './Signlanguage/AlphaB';
import {AlphaE} from './Signlanguage/AlphaE';
import {AlphaS} from './Signlanguage/AlphaS';
import {AlphaQ} from './Signlanguage/AlphaQ';
// import {AlphaU} from './Signlanguage/AlphaU';
// import {AlphaV} from './Signlanguage/AlphaV';
// import {AlphaW} from './Signlanguage/AlphaW';
import Webcam from 'react-webcam';
import {drawHand} from './utilities';
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { AlphaA: A, AlphaB: B, AlphaE: E, AlphaS: S, AlphaQ: Q};

   const runhandpose=async()=>{
     const net = await handpose.load();
     console.log("Handpose loaded");
     setInterval(()=>{
       detect(net);
     },100);
   }
   const detect=async(net)=>{
     if(typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
       const video = webcamRef.current.video;
       const videoWidth = webcamRef.current.video.videoWidth;
       const videoHeight = webcamRef.current.video.videoHeight;
       webcamRef.current.video.width = videoWidth;
       webcamRef.current.video.height = videoHeight;
       canvasRef.current.width = videoWidth;
       canvasRef.current.height = videoHeight;
       const hand = await net.estimateHands(video);

     

       if(hand.length > 0){
        const GE = new fp.GestureEstimator([
          AlphaA,
          // AlphaB,
          // AlphaE,
          // AlphaS,
          // AlphaQ,
        ])


        const gesture = await GE.estimate(hand[0].landmarks,7.5);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures)
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(emoji);
        }}


       const ctx=canvasRef.current.getContext("2d");
       drawHand(hand,ctx);
     }}
  useEffect(()=>{runhandpose()});
  return (
    <div className="App">
      <header className="App-header">
       <Webcam ref={webcamRef} style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}/>
        <canvas ref={canvasRef} style={{ 
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}/>
         {emoji !== null ? (
          <img alt="emaji"
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
