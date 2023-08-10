import { exp } from '@tensorflow/tfjs';
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const AlphaV= new GestureDescription('V');

AlphaV.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
AlphaV.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
 for(let finger of [Finger.Index, Finger.Middle]){
    AlphaV.addCurl(finger, FingerCurl.NoCurl, 1.0);
    AlphaV.addDirection(finger, FingerDirection.VerticalUp, 0.25);
 }
 for(let finger of [Finger.Pinky, Finger.Ring]){
    AlphaV.addCurl(finger, FingerCurl.FullCurl, 0.5);
    AlphaV.addDirection(finger, FingerDirection.VerticalDown, 0.25);
 }