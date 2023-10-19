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

function App() {

  return (
    <div className="divApp">
      <h1 className="h1App">Financial System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/Register-Contribution" element={<RegisterContribution/>}/>
          <Route path="/Withdraw-Contribution" element={<WithdrawContribution/>}/>
          <Route path="/Pay-off-Debt" element={<PayOffDebt/>}/>
          <Route path="/Register-Debt" element={<RegisterDebt/>}/>
          <Route path="/Register-Expense" element={<RegisterExpense/>}/>
          <Route path="/Register-Entry" element={<RegisterEntry/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
