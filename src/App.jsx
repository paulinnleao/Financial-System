import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// Imports from pages
import MainScreen from './pages/MainScreen';
import PayOffDebt from './pages/PayOffDebt';
import RegisterContribution from './pages/RegisterContribution';
import RegisterDebt from './pages/RegisterDebt';
import RegisterEntry from './pages/RegisterEntry';
import RegisterExpense from './pages/RegisterExpense';
import WithdrawContribution from './pages/WithdrawContribution';

// Imports React
import { useState } from 'react';

// Import Components
import { urlDataBase } from './components/urlDataBase';

// Import Custom-hooks
import { useFetch } from './hooks/useFetch';

function App() {

  const [selectDB, setSelectDB] = useState(0);
  const { data, httpConfig, loading, error} = useFetch(urlDataBase[selectDB]);

  const [total, setTotal] = useState(0);
  useState(() => {
    const updateTotal = async () => {
      const res = await fetch(urlDataBase[0]);
      const json = await res.json();
      console.log(json[0].total);
      setTotal(json[0].total);
    }
  }, [data, loading, selectDB]);
  return (
    <div className="divApp">
      <header>
        <h1 className="h1App">Financial System</h1>
        <h2>Total: R$ {total}</h2>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={
            <MainScreen loading={loading}/>
          }/>
          <Route path="/Register-Contribution" element={<RegisterContribution setTotal={setTotal}/>}/>
          <Route path="/Withdraw-Contribution" element={<WithdrawContribution setTotal={setTotal}/>}/>
          <Route path="/Pay-off-Debt" element={<PayOffDebt setTotal={setTotal}/>}/>
          <Route path="/Register-Debt" element={<RegisterDebt setTotal={setTotal}/>}/>
          <Route path="/Register-Expense" element={<RegisterExpense setTotal={setTotal}/>}/>
          <Route path="/Register-Entry" element={<RegisterEntry setTotal={setTotal} total={total} loading={loading} httpConfig={httpConfig} setSelectDB={setSelectDB}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App