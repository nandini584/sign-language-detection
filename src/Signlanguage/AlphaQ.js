import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AlphaQ = new GestureDescription('Q');

AlphaQ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AlphaQ.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

AlphaQ.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
AlphaQ.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  AlphaQ.addCurl(finger, FingerCurl.FullCurl, 1.0);
  AlphaQ.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}
