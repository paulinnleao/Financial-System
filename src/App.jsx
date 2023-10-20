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

  const {
    data: dataBalance,
    httpConfig: httpConfigBalance,
    loading: loadingBalance, 
    error: errorBalance}
     = useFetch(urlDataBase.Balance);

  const [total, setTotal] = useState(0);
  useState(() => {

  }, [dataBalance]);
  return (
    <div className="divApp">
      <header>
        <h1 className="h1App">Financial System</h1>
        <h2>Total: R$ {dataBalance}</h2>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={
            <MainScreen/>
          }/>
          <Route path="/Register-Contribution" element={<RegisterContribution setTotal={setTotal}/>}/>
          <Route path="/Withdraw-Contribution" element={<WithdrawContribution setTotal={setTotal}/>}/>
          <Route path="/Pay-off-Debt" element={<PayOffDebt setTotal={setTotal}/>}/>
          <Route path="/Register-Debt" element={<RegisterDebt setTotal={setTotal}/>}/>
          <Route path="/Register-Expense" element={<RegisterExpense setTotal={setTotal}/>}/>
          <Route path="/Register-Entry" element={<RegisterEntry setTotal={setTotal} total={total}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
