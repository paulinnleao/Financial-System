import { useEffect, useState } from "react"

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
        setLoading(true);

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
        setLoading(false);
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
        setMethdo("DELETE");
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
                
        console.log("Entrei aqui - httpConfig POST e a URL é - " + url + " - " + Date() );
                const newDate = Date() + 10000;
                while(newDate > Date()){};
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
            }else if(method === "DELETE"){
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
            }else if( method === "PUT"){
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
            }
        };
        httpRequest();
    },[config]);

    return {data, httpConfig, loading, error};
}