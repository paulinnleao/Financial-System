// Styles
import "../styles/RegisterEntry.css"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import TableDebts from "../components/TableDebts";

const RegisterEntry = ({setTotal, total, loading, httpConfig, setSelectDB}) => {

  const [nameEntry, setNameEntry] = useState();
  const [priceEntry, setPriceEntry] = useState(0);
  useEffect(() => {
  },[priceEntry]);

  const handleSubmit = () => {
    const newTotal = total + priceEntry;
    setTotal(newTotal);
    setPriceEntry(0);
    setSelectDB(1);
    const data = {
            "nameEntry": nameEntry,
            "value": priceEntry,
            "DueDate": new Date()
    }
    httpConfig(data, "POST");
  }

  return (
    <div>
      <Link to="/" className="btn btn-dark">
              Home
            </Link>
            
      <form onSubmit={handleSubmit}>
        <label className="nameEntry">
          <input
            required
            type="text"
            name="nameEntry"
            placeholder="Entry"
            onChange={(e) => setNameEntry(e.target.value)}
          />
        </label>
        <label className="priceEntry">
          <input 
            required
            type="number" 
            name="priceEntry"
            placeholder="Price"
            onChange={(e) => setPriceEntry(e.target.value)}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <TableDebts loading={loading}/>
    </div>
  )
}

export default RegisterEntry