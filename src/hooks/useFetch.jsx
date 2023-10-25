import { useEffect, useState } from "react"
import toast from 'react-hot-toast';
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [itemId, setItemId] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
            setMethod(null);

            setError(null);
        }catch(error){
            console.log(error.message);
            setError("Error loading data!");
        }
        setLoading(!loading);
    }
    fetchData();
    },[url, callFetch]);

    const httpConfig = (data, method, id) => {
       if(method === "POST"){
        setConfig({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            });
            setMethod("POST");
       } else if(method === "DELETE"){
        setConfig({
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        });
        setMethod("DELETE");
        setItemId(id);
       }else if(method === "PUT"){
        setConfig({
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        setMethod("PUT");
        setItemId(id);
       }
    }

    useEffect(()=>{
        const httpRequest = async()=>{
            if(method==="POST"){
                console.log("Entrei no post");
                setLoading(true);
                const res = await fetch(url, config)
                                    .then(response => {
                                        if(!response.ok){
                                            return new Error("Falhou na requisição.");
                                        }else if(response.status===404){
                                            return new Error("Não encontrado");
                                        }
                                        else{
                                            return response;
                                        }
                                    });
                const json = await res.json();
                setCallFetch(json);
                setLoading(false);
                toast.success("Data saved successfully!");
            }else if(method === "DELETE"){
                setLoading(true);
                const urlDelete = `${url}/${itemId}`;
                const res = await fetch(urlDelete, config)
                                    .then(response => {
                                        if(!response.ok){
                                            return new Error("Falhou na requisição.");
                                        } else if(response.status === 404){
                                            return new Error("Não encontrado");
                                        }else{
                                            return response;
                                        }
                                    });
                const json = await res.json();

                setCallFetch(json);
                setLoading(false);
            }else if( method === "PUT"){
                setLoading(true);
                const urlUpdate = `${url}/${itemId}`;
                const res = await fetch(urlUpdate, config)
                                    .then(response=> {
                                        if (!response.ok){
                                            return new Error("Falhou na requisição.");
                                        }else if(response.status === 404){
                                            return new Error("Não encontrado");
                                        }else{
                                            return response;
                                        }
                                    });
                const json = await res.json();
                setCallFetch(json);
                setLoading(false);
            }
        };
        httpRequest();
    },[config]);

    return {data, httpConfig, loading, error};
}