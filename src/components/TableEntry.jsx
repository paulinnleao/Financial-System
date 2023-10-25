// DataBase
import { useEffect, useMemo, useState } from "react";
import { urlDataBase } from "./urlDataBase";

// Images
import remove from "../Images/excluir.png"

//Style
import "../styles/Tables.css"
import { useFetch } from "../hooks/useFetch";


const TableEntry = () => {
const [data, setData] = useState(null);


const { httpConfig, loading} = useFetch(urlDataBase[1]);

const httpRequest = async () => {
    try{
        const res = await fetch(urlDataBase[1]);
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

const removeEntry = ((id) => {
    try{
        httpConfig(data, "DELETE", id)
    }catch(e){
        toast.error("Something didn't go right :(");
    }
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
                        <td className="grid-item grid-item-left"><h2>{debt.nameEntry}</h2></td>
                        <td className="grid-item"><h2>${debt.value}</h2></td>
                        <td className="grid-item grid-item-right"><h2>{debt.DueDate}</h2></td>
                        
                        <td><img 
                                    src= {remove}
                                    alt="Remove"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(removeEntry(debt.id))}
                                /></td>
                    </tr>
                ))}
                </tbody>
            </table>
  )
}

export default TableEntry;