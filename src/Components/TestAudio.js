import React, { useState } from "react";
const Tone = require("tone");

// instantiate & unlock Audio Context:
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const oscillator = context.createOscillator();
oscillator.connect(context.destination);

// try to get simple tone.js example working
const synth = new Tone.Synth();
synth.toMaster();
function clickButton() {
  synth.triggerAttackRelease("C4", 0.25, 4);
  //   const pattern = new Tone.Pattern(
  //     function(time, note) {
  //       synth.triggerAttackRelease(note, 0.25);
  //     },
  //     ["C4", "D4", "E4", "G4", "A4"]
  //   );
}
////////////////////////////////////////

function TestAudio() {
  return <div>{/* <button onClick={clickButton}>test button</button> */}</div>;
}
export default TestAudio;
