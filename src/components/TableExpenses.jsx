// React
import { useEffect, useMemo, useState } from "react";
import toast, {Toaster} from "react-hot-toast";

// DataBase
import { urlDataBase } from "./urlDataBase";

// Images
import remove from "../Images/excluir.png"
import pay from "../Images/pay.png";
//Style
import "../styles/Tables.css"
import { useFetch } from "../hooks/useFetch";


const TableExpenses = () => {
const [data, setData] = useState(null);

const { httpConfig, loading} = useFetch(urlDataBase[3]);

const httpRequest = async () => {
    try{
        const res = await fetch(urlDataBase[3]);
        const foundData = await res.json();
        setData(foundData);
    }catch(error){
        console.log(error.message);
    }
}

useEffect(() => {
    
    if(!loading){
        httpRequest();
    }
},[loading]);
const removeExpense = (id) => {
    try{
        httpConfig(data, "DELETE", id)
    }catch(e){
        toast.error("Something didn't go right :(");
    }
};
const payExpense = (id) => {
        try{
            const dataDebt = {
                id:id,
                status:false,
            }
            httpConfig(dataDebt, "PUT", id)
        }catch(e){
            toast.error("Something didn't go right :(");
        }
};
    return (
            <table className="grid-container">
                <thead className="grid-container-header">
                    <tr>
                        <th className="grid-title"><h1>Name</h1></th>
                        <th className="grid-title"><h1>Price</h1></th>
                        <th className="grid-title"><h1>Date</h1></th>
                    </tr>
                </thead>
                <tbody>
                {data && data?.map((expenses) => (
                    <tr className="grid-body" key={expenses.id}>
                        <td className="grid-item grid-item-left"><h2>{expenses.nameExpense}</h2></td>
                        <td className="grid-item"><h2>${expenses.value}</h2></td>
                        <td className="grid-item grid-item-right"><h2>{expenses.DueDate}</h2></td>
                        <td><img 
                                    src= {remove}
                                    alt="Remove"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(removeExpense(expenses.id))}
                                /></td>
                                <td><img 
                                    src={pay}
                                    alt="Pay"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(payExpense(expenses.id))}
                                /></td>
                    </tr>
                ))}
                </tbody>
            </table>
  )
}

export default TableExpenses;