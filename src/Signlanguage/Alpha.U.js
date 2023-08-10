import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const UGesture = new GestureDescription('U');

UGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
UGesture.addDirection(Finger.Thumb, DiagonalUpLeft, 0.5);
UGesture.addDirection(Finger.Thumb, DiagonalUpRight, 0.5);

UGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
UGesture.addDirection(Finger.Index, VerticalUp, 1.0);
 
UGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
UGesture.addDirection(Finger.Middle, VerticalUp, 1.0);

UGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
UGesture.addDirection(Finger.Ring, VerticalDown, 0.5);