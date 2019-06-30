import React, { useState } from "react";
import { ETButton, JIButton } from "./WebAudio";

export const Form = () => {
  const [tenor, setTenor] = useState("");
  const [lead, setLead] = useState("");
  const [bari, setBari] = useState("");
  const [bass, setBass] = useState("");
  const [mel, setMel] = useState(lead);

  const chord = [tenor, lead, bari, bass];
  console.log(chord, mel);

  return (
    <div>
      <form>
        <div>
          <label>tenor </label>
          <input
            value={tenor}
            onChange={e => setTenor(e.target.value)}
            placeholder="tenor"
            type="text"
            name="tenor"
            required
          />
        </div>
        <div>
          <label>lead </label>
          <input
            value={lead}
            onChange={e => setLead(e.target.value)}
            placeholder="lead"
            type="text"
            name="lead"
            required
          />
        </div>
        <div>
          <label>bari </label>
          <input
            value={bari}
            onChange={e => setBari(e.target.value)}
            placeholder="bari"
            type="text"
            name="bari"
            required
          />
        </div>
        <div>
          <label>bass </label>
          <input
            value={bass}
            onChange={e => setBass(e.target.value)}
            placeholder="bass"
            type="text"
            name="bass"
            required
          />
        </div>{" "}
        <div>
          {" "}
          who has the melody/key pitch?{" "}
          <select onChange={e => setMel(e.target.value)}>
            <option value="" disabled hidden>
              select voice
            </option>
            <option value={tenor}>tenor</option>
            <option value={lead}>lead</option>
            <option value={bari}>bari</option>
            <option value={bass}>bass</option>
          </select>
        </div>
      </form>
      <button onClick={() => ETButton(chord)}>play in ET</button>
      <button onClick={() => JIButton(chord, mel)}>play in JI</button>
    </div>
  );
};
