// Styles
import "../styles/RegisterEntry.css"

// Import react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


// Import myComponents and Functions
import TableDebts from "../components/TableDebts";
import { urlDataBase } from "../components/urlDataBase";
import { useFetch } from "../hooks/useFetch";

const RegisterEntry = ({setbalance, balance, updateBalance}) => {
  const [nameEntry, setNameEntry] = useState();
  const [priceEntry, setPriceEntry] = useState(0);
  const { httpConfig, loading} = useFetch(urlDataBase[1]);

  useEffect(() => {
  },[priceEntry]);

  const handleSubmit = () => {
    const newbalance = balance + priceEntry;
    setbalance(newbalance);
    const data = {
            "nameEntry": nameEntry,
            "value": priceEntry,
            "DueDate": new Date(),
    }
    httpConfig(data, "POST", 0);
    setPriceEntry(0);
    updateBalance();
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