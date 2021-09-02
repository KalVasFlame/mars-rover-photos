import { useState } from "react"

import s from "./Form.module.css"

const Form = ({ onFormSubmit }) => {
  const [sol, setSol] = useState(1000)

  const onSolChange = (e) => {
    setSol(e.target.value)
  }

  return (
    <form action="submit" onSubmit={onFormSubmit}>
      <h2>Choice Rover</h2>
      <input id="spirit" type="radio" name="rover" value="spirit" defaultChecked />
      <label htmlFor="spirit">
        <span>Spirit (new)</span>
      </label>
      <input type="radio" name="rover" value="curiosity" />
      <span>Curiosity</span>
      <input type="radio" name="rover" value="opportunity" />
      <span>Opportunity</span>
      <h2>Choice Camera</h2>
      <select name="camera">
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="MAHLI">Mars Hand Lens Imager</option>
        <option value="MARDI">Mars Descent Imager</option>
        <option value="NAVCAM">Navigation Camera </option>
        <option value="PANCAM">Panoramic Camera </option>
        <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES) </option>
      </select>
      <h2>Choice Sol</h2>
      <span className={s.sol}>{sol}</span>
      <span>0</span> <input onChange={onSolChange} value={sol} type="range" name="sol" min="0" max="1000" step="1" />
      <span>1000</span>
      <button className={s.button} type="submit" color="secondary">
        Photos
      </button>
    </form>
  )
}

export default Form
