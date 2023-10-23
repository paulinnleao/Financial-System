// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";

//Style
import "../styles/TableDebts.css"


const TableExpenses = () => {
const [data, setData] = useState(null);


useEffect(() => {
    const httpRequest = async () => {
        try{
            const res = await fetch(urlDataBase[3]);
            const foundData = await res.json();
            setData(foundData);
        }catch(error){
            console.log(error.message);
        }
    }
    httpRequest();
},[])
    return (
            <div className="grid-container">
                <div className="grid-container-header">
                    <div className="grid-title"><h1>Name</h1></div>
                    <div className="grid-title"><h1>Price</h1></div>
                    <div className="grid-title"><h1>Date</h1></div>
                </div>
                {data && data?.map((debt) => (
                    <div className="grid-body" key={debt.id}>
                        <div className="grid-item grid-item-left"><h2>{debt.nameExpense}</h2></div>
                        <div className="grid-item"><h2>${debt.value}</h2></div>
                        <div className="grid-item grid-item-right"><h2>{debt.DueDate}</h2></div>
                    </div>
                ))}
            </div>
  )
}

export default TableExpenses;