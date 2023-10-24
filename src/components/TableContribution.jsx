// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";

//Style
import "../styles/TableDebts.css"


const TableContribution = () => {
const [data, setData] = useState(null);


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
},[])
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
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default TableContribution;