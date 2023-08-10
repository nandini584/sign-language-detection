import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaS = new GestureDescription('S');

AlphaS.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AlphaS.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
AlphaS.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaS.addCurl(finger, FingerCurl.FullCurl, 1.0);
  AlphaS.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}