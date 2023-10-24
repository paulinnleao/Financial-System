// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";

// Images
import remove from "../Images/excluir.png"
import money_bag from "../Images/money-bag.png";

//Style
import "../styles/Tables.css"
import { useFetch } from "../hooks/useFetch";


const TableContribution = () => {
const [data, setData] = useState(null);

const { httpConfig, loading} = useFetch(urlDataBase[4]);

useEffect(() => {
    const httpRequest = async () => {
        try{
            const res = await fetch(urlDataBase[4]);
            const foundData = await res.json();
            setData(foundData);
        }catch(error){
            console.log(error.message);
        }
    }
    httpRequest();
},[loading]);
const removeContribution = ((id) => {
    httpConfig(data, "DELETE", id)
});
const payContribution = ((id) => {
    const dataDebt = {
        id:id,
        status:false,
    }
    httpConfig(dataDebt, "PUT", id)
});
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
                    {data && data?.map((debt) => (
                        <tr className="grid-body" key={debt.id}>
                            <td className="grid-item grid-item-left"><h2>{debt.nameContribution}</h2></td>
                            <td className="grid-item"><h2>${debt.value}</h2></td>
                            <td className="grid-item grid-item-right"><h2>{debt.DueDate}</h2></td>
                            <td><img 
                                    src={remove}
                                    alt="Remove"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(removeContribution(debt.id))}
                                /></td>
                                <td><img 
                                    src={money_bag} 
                                    alt="Pay"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(payContribution(debt.id))}
                                /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default TableContribution;