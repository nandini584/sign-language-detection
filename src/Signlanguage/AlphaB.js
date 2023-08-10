import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaA = new GestureDescription('A');

AlphaA.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
AlphaA.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
AlphaA.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaA.addCurl(finger, FingerCurl.NoCurl, 1.0);
  AlphaA.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}