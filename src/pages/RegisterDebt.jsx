import {Link} from 'react-router-dom'
import TableDebts from '../components/TableDebts'
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { urlDataBase } from '../components/urlDataBase';
const RegisterDebt = () => {

  const { httpConfig, loading} = useFetch(urlDataBase[2]);
  const [nameDebt, setNameDebt] = useState(null);
  const [dateDebt, setDateDebt] = useState(null);
  const [valueDebt, setValueDebt] = useState(null);

  const handleSubmit = () => {
    const data = {
      nameDebt: nameDebt,
      value: valueDebt,
      DueDate: dateDebt,
      status:true,
    }
  httpConfig(data, "POST", 0);
  }
  return (
    <div>
      

      <Link to="/" className="btn btn-dark">
              Home
            </Link>
            <form onSubmit={handleSubmit}>
              <label>
                Debt
                <input
                type='text'
                name='nameDebt'
                placeholder='Debt'
                required
                onChange={(e)=>setNameDebt(e.target.value)}
                />
              </label>
              <label>
                Value debt
                <input
                type='number'
                name='valueDebt'
                placeholder='$'
                required
                onChange={(e)=>setValueDebt(e.target.value)}
                />
              </label>
              <label>
                Date
                <input
                type='date'
                name='dateDebt'
                placeholder='9999/99/99'
                required
                onChange={(e)=>setDateDebt(e.target.value)}
                />
              </label>
              <button type='submit'>add</button>
            </form>
            <TableDebts />
    </div>
  )
}

export default RegisterDebt