// Styles
import "../styles/RegisterEntry.css"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const RegisterEntry = ({setTotal, total}) => {

  const [nameEntry, setNameEntry] = useState();
  const [priceEntry, setPriceEntry] = useState(0);
  useEffect(() => {
  },[priceEntry]);

  const handleSubmit = () => {
    const newTotal = total + priceEntry;
    setTotal(newTotal);
    setPriceEntry(0);
  }

  return (
    <div>
      <Link to="/" className="btn btn-dark">
              Home
            </Link>
            
      <form onSubmit={handleSubmit}>
        <label className="nameEntry">
          <input 
            type="text" 
            name="nameEntry"
            placeholder="Entry"
            onChange={(e) => setNameEntry(e.target.value)}
          />
        </label>
        <label className="priceEntry">
          <input 
            type="number" 
            name="priceEntry"
            placeholder="Price"
            onChange={(e) => setPriceEntry(e.target.value)}
          />
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default RegisterEntry