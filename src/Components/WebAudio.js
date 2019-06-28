import React, { useState } from "react";
const Tone = require("tone");

// instantiate & unlock Audio Context:
const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

// create a PolySynth for four-voice playback
var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

// function to wrap the button click
function ETButton() {
  ctx.resume().then(() => {
    synth.triggerAttackRelease(["C4", "E4", "A4"], "4");
  });
}

function WebAudio() {
  return (
    <div>
      <button onClick={ETButton}>test ET button</button>
    </div>
  );
}
export default WebAudio;
