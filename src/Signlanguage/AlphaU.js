import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
export const AlphaU = new GestureDescription('U');

AlphaU.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
AlphaU.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
AlphaU.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

AlphaU.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
AlphaU.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
 
AlphaU.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
AlphaU.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

AlphaU.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
AlphaU.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.5);

AlphaU.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
AlphaU.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.5);