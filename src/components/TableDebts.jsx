// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";
//Style
import "../styles/Tables.css"
import { useFetch } from "../hooks/useFetch";
// Images
import remove from "../Images/excluir.png"
import pay from "../Images/pay.png";

const TableDebts = () => {
const [data, setData] = useState(null);

const { httpConfig, loading} = useFetch(urlDataBase[2]);

useEffect(() => {
    const httpRequest = async () => {
        try{
            const res = await fetch(urlDataBase[2]);
            const foundData = await res.json();
            setData(foundData);
        }catch(error){
            console.log(error.message);
        }
    }
    httpRequest();
},[loading]);
const removeDebt = ((id) => {
    httpConfig(data, "DELETE", id)
});
const payDebt = ((id) => {
    const dataDebt = {
        id:id,
        status:false,
    }
    httpConfig(dataDebt, "PUT", id)
});
    return (
        <div>
            <table>
                <thead className="grid-container-header">
                    <tr>
                        <th className="grid-title"><h1>Name</h1></th>
                        <th className="grid-title"><h1>Price</h1></th>
                        <th className="grid-title"><h1>Date</h1></th>
                    </tr>
                </thead>
                <tbody>
                        {data && data?.map((debt) => (
                            <tr className="grid-body" key={debt.id}>
                                
                            {console.log(debt)}
                                <td className={"grid-item grid-item-left " + (!debt.status?"payed":"noPayed")}><h2>{debt.nameDebt}</h2></td>
                                <td className="grid-item"><h2>${debt.value}</h2></td>
                                <td className="grid-item grid-item-right"><h2>{debt.DueDate}</h2></td>
                                <td><img 
                                    src={remove}
                                    alt="Remove"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(removeDebt(debt.id))}
                                /></td>
                                <td><img 
                                    src={pay}
                                    alt="Pay"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(payDebt(debt.id))}
                                /></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
  )
}

export default TableDebts;