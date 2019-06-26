import React, { useState } from "react";

// instantiate & unlock Audio Context:
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const oscillator = context.createOscillator();
oscillator.connect(context.destination);
//////

// try to get simple tone.js example working
// const Tone = require("tone");
// const synth = new Tone.Synth();
// synth.toMaster();
// function clickButton() {
//   synth.triggerAttackRelease("C4", 0.25, 4);
//   //   const pattern = new Tone.Pattern(
//   //     function(time, note) {
//   //       synth.triggerAttackRelease(note, 0.25);
//   //     },
//   //     ["C4", "D4", "E4", "G4", "A4"]
//   //   );
// }
////////////////////////////////////////

function Form() {
  const [tenor, setTenor] = useState("");
  const [lead, setLead] = useState("");
  const [bari, setBari] = useState("");
  const [bass, setBass] = useState("");
  const [mel, setMel] = useState("ld");

  return (
    <div>
      <form>
        <input
          value={tenor}
          onChange={e => setTenor(e.target.value)}
          placeholder="tenor"
          type="text"
          name="tenor"
          required
        />
        <input
          name="mel"
          value="tn"
          onChange={e => setMel(e.target.value)}
          type="radio"
        />
        <br />
        <input
          value={lead}
          onChange={e => setLead(e.target.value)}
          placeholder="lead"
          type="text"
          name="lead"
          required
        />
        <input
          name="mel"
          value="ld"
          onChange={e => setMel(e.target.value)}
          type="radio"
          checked
        />
        <br />

        <input
          value={bari}
          onChange={e => setBari(e.target.value)}
          placeholder="bari"
          type="text"
          name="bari"
          required
        />
        <input
          name="mel"
          value="br"
          onChange={e => setMel(e.target.value)}
          type="radio"
        />
        <br />

        <input
          value={bass}
          onChange={e => setBass(e.target.value)}
          placeholder="bass"
          type="text"
          name="bass"
          required
        />
        <input
          name="mel"
          value="bs"
          onChange={e => setMel(e.target.value)}
          type="radio"
        />
        <br />

        <button
          type="submit"
          // onSubmit={() => {
          // when the tune button is hit:
          // - send the notes through the JI calculator
          // - JI calc should return notes to polysynth
          // - polysynth should play chord (more than once)
          // }}
        >
          tune!
        </button>
      </form>
      {/* <button onClick={clickButton}>test button</button> */}
    </div>
  );
}
export default Form;
