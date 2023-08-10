import { exp } from '@tensorflow/tfjs';
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const VGesture= new GestureDescription('V');

VGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
VGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
 for(let finger of [Finger.Index, Finger.Middle]){
    VGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    VGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
 }
 for(let finger of [Finger.Pinky, Finger.Ring]){
    VGesture.addCurl(finger, FingerCurl.FullCurl, 0.5);
    VGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
 }