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
import { useEffect, useState } from 'react';

// Import Components
import { urlDataBase } from './components/urlDataBase';

// Import Custom-hooks
import { useFetch } from './hooks/useFetch';

function App() {
  const { data, httpConfig, loading, error} = useFetch(urlDataBase[0]);
  const [balance, setbalance] = useState(0);

  const updateBalance = () => {
    const balanceUpdate = {
      id: 1,
      total: balance,
    }
    httpConfig(balanceUpdate, "PUT", 1);
  }  
  useEffect(() => {
  }, [balance]);
  
  return (
    <div className="divApp">
      <header>
        <h1 className="h1App">Financial System</h1>
        <h2>Balance: R$ {balance}</h2>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={
            <MainScreen loading={loading}/>
          }/>
          <Route path="/Register-Contribution" element={<RegisterContribution setbalance={setbalance}/>}/>
          <Route path="/Withdraw-Contribution" element={<WithdrawContribution setbalance={setbalance}/>}/>
          <Route path="/Pay-off-Debt" element={<PayOffDebt setbalance={setbalance}/>}/>
          <Route path="/Register-Debt" element={<RegisterDebt setbalance={setbalance}/>}/>
          <Route path="/Register-Expense" element={<RegisterExpense setbalance={setbalance}/>}/>
          <Route path="/Register-Entry" element={<RegisterEntry setbalance={setbalance} balance={balance} updateBalance={updateBalance}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App