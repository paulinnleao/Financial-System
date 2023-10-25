import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// Imports from pages
import MainScreen from './pages/MainScreen';
import RegisterContribution from './pages/RegisterContribution';
import RegisterDebt from './pages/RegisterDebt';
import RegisterEntry from './pages/RegisterEntry';
import RegisterExpense from './pages/RegisterExpense';
import { useMemo } from 'react';

// Imports React
import { useEffect, useState } from 'react';

// Import Components
import { urlDataBase } from './components/urlDataBase';

// Import Custom-hooks
import { useFetch } from './hooks/useFetch';

function App() {

  const [refresh, setRefresh] = useState(false);

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await fetch(urlDataBase[0]);
            const json = await res.json();
            setData(json);
        }catch(error){
            console.log(error.message);
            setError("Error loading data!");
        }
    }
    fetchData();
    },[refresh]);
  return (
    <div className="divApp">
      <header>
        <h1 className="h1App">Financial System</h1>
        {data && data?.map((e)=><h2 key={e.id}>Balance: $ {e.total}</h2>)}
        
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={
            <MainScreen/>
          }/>
          <Route path="/Register-Contribution" element={<RegisterContribution/>}/>
          <Route path="/Register-Debt" element={<RegisterDebt/>}/>
          <Route path="/Register-Expense" element={<RegisterExpense/>}/>
          <Route path="/Register-Entry" element={<RegisterEntry refresh={refresh} setRefresh={setRefresh}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App