// Import React
import {Link} from 'react-router-dom';
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';

// Import my functions and renders
import TableContribution from '../components/TableContribution';
import { useFetch } from '../hooks/useFetch';
import { urlDataBase } from '../components/urlDataBase';
const RegisterContribution = () => {

  const { httpConfig, loading} = useFetch(urlDataBase[4]);
  const [nameContribution, setNameContribution] = useState(null);
  const [valueContribution, setValueContribution] = useState(null);
  const [dateContribution, setDateContribution] = useState(null);

  const handleSubmit = () => {
    try{
      const data = {
        nameContribution: nameContribution,
        value: valueContribution,
        DueDate: dateContribution,
        status: true,
      }
      httpConfig(data, "POST", 0);
      toast.success("Data saved successfully!");
    }catch(e){
      toast.error("Error saving data!");
    }
  }

  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Link to="/" className="btn btn-dark">
              Home
            </Link>
            <form onSubmit={handleSubmit}>
              <label>
                Contribution
                <input
                type='text'
                name='nameContribution'
                placeholder='Contribution'
                required
                onChange={(e)=>setNameContribution(e.target.value)}
                />
              </label>
              <label>
                Value contribution
                <input
                type='number'
                name='valueContribution'
                placeholder='$'
                required
                onChange={(e)=>setValueContribution(e.target.value)}
                />
              </label>
              <label>
                Date
                <input
                type='date'
                name='dateContribution'
                placeholder='9999/99/99'
                required
                onChange={(e)=>setDateContribution(e.target.value)}
                />
              </label>
              <button type='submit'>add</button>
            </form>
      <TableContribution />
    </div>
  )
}

export default RegisterContribution