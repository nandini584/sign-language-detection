import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const UGesture = new GestureDescription('U');

UGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
UGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
UGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

UGesture.addCurl(Finger.Index, FingerDirection.FingerCurl.NoCurl, 1.0);
UGesture.addDirection(Finger.Index,FingerDirection. VerticalUp, 1.0);
 
UGesture.addCurl(Finger.Middle, FingerDirection.FingerCurl.NoCurl, 1.0);
UGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

UGesture.addCurl(Finger.Ring, FingerDirection.FingerCurl.FullCurl, 1.0);
UGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.5);

UGesture.addCurl(Finger.Pinky, FingerDirection.FingerCurl.FullCurl, 1.0);
UGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.5);