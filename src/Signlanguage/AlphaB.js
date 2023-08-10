import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaB = new GestureDescription('B');

AlphaB.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
AlphaB.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
AlphaB.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaB.addCurl(finger, FingerCurl.NoCurl, 1.0);
  AlphaB.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}