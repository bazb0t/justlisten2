import jiKeyCalc from "./jiKeyCalc";
const Tone = require("tone");

// instantiate & unlock Audio Context:
const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

// create a PolySynth for four-voice playback
var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

// function to wrap the button click
export function ETButton(chord) {
  ctx.resume().then(() => {
    synth.triggerAttackRelease(chord, "4");
  });
}

export function JIButton(chord, mel) {
  let newChord = new jiKeyCalc(chord, mel);
  ctx.resume().then(() => {
    synth.triggerAttackRelease(newChord.harmony, "4");
  });
}
