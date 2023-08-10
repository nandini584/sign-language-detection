import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaA = new GestureDescription('A');

AlphaA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AlphaA.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

AlphaA.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
AlphaA.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaA.addCurl(finger, FingerCurl.FullCurl, 1.0);
  AlphaA.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}
