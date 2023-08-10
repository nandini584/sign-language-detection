import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaE = new GestureDescription('E');

AlphaE.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
AlphaE.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
AlphaE.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaE.addCurl(finger, FingerCurl.FullCurl, 1.0);
  AlphaE.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}