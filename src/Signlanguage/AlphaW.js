import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const WGesture= new GestureDescription('W');
WGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

WGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
WGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

for(let finger of [Finger.Index, Finger.Middle,Finger.Ring]){
    WGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    WGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
 }
 WGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
 WGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);