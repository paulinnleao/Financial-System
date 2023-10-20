// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";



const TableDebts = () => {
const [data, setData] = useState(null);

useEffect(() => {
    const httpRequest = async () => {
        try{
            const res = await fetch(urlDataBase.Debts);
            const foundData = await res.json();
            setData(foundData);
        }catch(error){
            console.log(error.message);
        }
    }
    httpRequest();
},[])
    return (
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
                {data && data?.map((debt) => {
                    console.log(debt.id + " " + debt.nameDebt + " " + debt.value + " " + debt.DueDate);
                    <tr>
                        <th key={debt.id}>{debt.nameDebt}</th>
                        <th key={debt.id}>{debt.value}</th>
                        <th key={debt.id}>{debt.DueDate}</th>
                    </tr>
                })}
            </tbody>
  )
}

export default TableDebts;