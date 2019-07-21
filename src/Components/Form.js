import React, { useState } from "react";
import { ETButton, JIButton } from "./WebAudio";
import { pitchList } from "./pitchList";

export const Form = () => {
  const [tenor, setTenor] = useState("E4");
  const [lead, setLead] = useState("Bb3");
  const [bari, setBari] = useState("G3");
  const [bass, setBass] = useState("C3");
  const [mel, setMel] = useState(lead);

  const chord = [tenor, lead, bari, bass];
  console.log(chord, mel);

  return (
    <div>
      <form>
        <div>
          <label>tenor </label>
          <select
            name="tenor"
            onChange={e => setTenor(e.target.value)}
            required
            defaultValue="E4"
          >
            {pitchList.map(voice => {
              return (
                <option value={voice} key={`tn` + voice}>
                  {voice}
                </option>
              );
            })}
          </select>
          <input
            type="radio"
            name="mel"
            value={tenor}
            onChange={e => setMel(e.target.value)}
          />
        </div>
        <div>
          <label>lead </label>
          <select
            name="lead"
            onChange={e => setLead(e.target.value)}
            required
            defaultValue="Bb3"
          >
            {pitchList.map(voice => {
              return (
                <option value={voice} key={`ld` + voice}>
                  {voice}
                </option>
              );
            })}
          </select>
          <input
            type="radio"
            name="mel"
            value={lead}
            onChange={e => setMel(e.target.value)}
          />
        </div>
        <div>
          <label>bari </label>
          <select
            name="bari"
            onChange={e => setBari(e.target.value)}
            required
            defaultValue="G3"
          >
            {pitchList.map(voice => {
              return (
                <option value={voice} key={`br` + voice}>
                  {voice}
                </option>
              );
            })}
          </select>
          <input
            type="radio"
            name="mel"
            value={bari}
            onChange={e => setMel(e.target.value)}
          />
        </div>
        <div>
          <label>bass </label>
          <select
            name="bass"
            onChange={e => setBass(e.target.value)}
            required
            defaultValue="C3"
          >
            {pitchList.map(voice => {
              return (
                <option value={voice} key={`bs` + voice}>
                  {voice}
                </option>
              );
            })}
          </select>
          <input
            type="radio"
            name="mel"
            value={bass}
            onChange={e => setMel(e.target.value)}
          />
        </div>{" "}
        <div> who has the melody/key pitch? (select one) </div>
      </form>
      <button onClick={() => ETButton(chord)}>play in ET</button>
      <button onClick={() => JIButton(chord, mel)}>play in JI</button>
    </div>
  );
};
