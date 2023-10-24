// Styles
import "../styles/RegisterEntry.css"

// Import react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


// Import myComponents and Functions
import TableEntry from "../components/TableEntry";
import { urlDataBase } from "../components/urlDataBase";
import { useFetch } from "../hooks/useFetch";

const RegisterEntry = ({refresh, setRefresh}) => {
  const [nameEntry, setNameEntry] = useState(null);
  const [priceEntry, setPriceEntry] = useState(0);
  const [dateEntry, setDateEntry] = useState(null);
  const { httpConfig, loading} = useFetch(urlDataBase[1]);
  const { httpConfig: httpConfigBalance } = useFetch(urlDataBase[0]);

  useEffect(() => {
  },[priceEntry]);

  const handleSubmit = () => {
    const data = {
            nameEntry: nameEntry,
            value: priceEntry,
            DueDate: dateEntry,
    }
    httpConfig(data, "POST", 0);
    httpConfigBalance(balance+priceEntry, "PUT", 1);
    setPriceEntry(0);
    setRefresh(!refresh);
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
        <label className="dateEntry">
          <input 
            required
            type="date" 
            name="dateEntry"
            placeholder="Price"
            onChange={(e) => setDateEntry(e.target.value)}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <TableEntry loading={loading}/>
    </div>
  )
}

export default RegisterEntry