import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const AlphaW= new GestureDescription('W');
AlphaW.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

AlphaW.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
AlphaW.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

for(let finger of [Finger.Index, Finger.Middle,Finger.Ring]){
    AlphaW.addCurl(finger, FingerCurl.NoCurl, 1.0);
    AlphaW.addDirection(finger, FingerDirection.VerticalUp, 0.25);
 }
 AlphaW.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
 AlphaW.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);