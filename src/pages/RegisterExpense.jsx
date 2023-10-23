import { Link } from "react-router-dom"
import { useState } from "react"

// Import my functions and renders
import { urlDataBase } from "../components/urlDataBase";
import { useFetch } from "../hooks/useFetch";
import TableExpenses from "../components/TableExpenses"

const RegisterExpense = () => {

  const { httpConfig, loading} = useFetch(urlDataBase[3]);
  const [nameExpense, setNameExpense] = useState(null);
  const [valueExpense, setValueExpense] = useState(null);
  const [dateExpense, setDateExpense] = useState(null);

  const handleSubmit = () =>{
    data = {
      nameExpense: nameExpense,
      value: valueExpense,
      DueDate: dateExpense,
    }
    httpConfig(data, "POST", 0);
  }

  return (
    <div>
      

      <Link to="/" className="btn btn-dark">
              Home
            </Link>
      <form onSubmit={handleSubmit}>
        <label>Name Expense
          <input
          required
          type="text"
          name="nameExpense"
          placeholder="text"
          onChange={(e)=>setNameExpense(e.target.value)}
           />
          </label>
          <label>Price Expense
          <input
          required
          type="number"
          name="valueExpense"
          placeholder="$"
          onChange={(e)=>setValueExpense(e.target.value)}
           />
          </label>
        <label>Date Expense
          <input
          required
          type="date"
          name="dateExpense"
          onChange={(e)=>setDateExpense(e.target.value)}
           />
          </label>
          <button type="submit">add</button>
        </form>
      <TableExpenses />
    </div>
  )
}

export default RegisterExpense