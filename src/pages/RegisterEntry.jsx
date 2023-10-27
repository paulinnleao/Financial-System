// Styles
import "../styles/RegisterEntry.css"

// Import react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import toast from 'react-hot-toast';


// Import myComponents and Functions
import TableEntry from "../components/TableEntry";
import { urlDataBase } from "../components/urlDataBase";
import { useFetch } from "../hooks/useFetch";

const RegisterEntry = ({refresh, setRefresh, data}) => {
  const [nameEntry, setNameEntry] = useState(null);
  const [priceEntry, setPriceEntry] = useState(0);
  const [dateEntry, setDateEntry] = useState(null);
  const { httpConfig, loading} = useFetch(urlDataBase[1]);

  const updateBalance = async () => {
    const currentTotal = data[0].total;
    const newTotal = currentTotal + priceEntry;
    const config = {
      method:"PUT",
      header:{
        "Content-type": "application/json",
      },
      body: JSON.stringify({total:currentTotal}),
    };
    try{
      const res = await fetch(`${urlDataBase[0]}/${1}`, config);
      const json = await res.json();
      setRefresh(json);
    }catch{
      toast.error("Something wrong happened when trying to update the balance!");
    }
  };
  useEffect(() => {}, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const dataEntry = {
              nameEntry: nameEntry,
              value: priceEntry,
              DueDate: dateEntry,
      }

      httpConfig(dataEntry, "POST", 0);
      updateBalance();
      setPriceEntry(0);
      setRefresh(!refresh);
    }catch(e){
      toast.error("Error saving data!");
    }
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
            onChange={(e) => setPriceEntry(parseInt(e.target.value)+priceEntry)}
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
      <TableEntry />
    </div>
  )
}

export default RegisterEntry