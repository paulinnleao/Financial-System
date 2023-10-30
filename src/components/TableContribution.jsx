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

const httpRequest = async () => {
    try{
        const res = await fetch(urlDataBase[4]);
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

const removeContribution = (contribution) => {
    try{
        if(!contribution.status){
            // desconta balance
        }
        httpConfig(data, "DELETE", contribution.id)
    }
    catch(e){
        toast.error("Something didn't go right :(");
    }
};

const collect = (contribution) => {
    try{
        const dataDebt = {
            nameContribution: contribution.nameContribution,
            value: contribution.DueDate,
            DueDate: contribution.DueDate,
            status:false,
        }
        httpConfig(dataDebt, "PUT", contribution.id)
    }
    catch(e){
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
                    {data && data?.map((contribution) => (
                        <tr className="grid-body" key={contribution.id}>
                            <td className={"grid-item grid-item-left " + (!contribution.status?"payed":"")}><h2>{contribution.nameContribution}</h2></td>
                            <td className={"grid-item " + (!contribution.status?"payed":"")}><h2>${contribution.value}</h2></td>
                            <td className={"grid-item grid-item-right " + (!contribution.status?"payed":"")}><h2>{contribution.DueDate}</h2></td>
                            <td><img 
                                    src={money_bag} 
                                    alt="Pay"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(collect(contribution))}
                                /></td>
                            <td><img 
                                    src={remove}
                                    alt="Remove"
                                    height="100" 
                                    width="100"
                                    onClick={()=>(removeContribution(contribution))}
                                /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default TableContribution;