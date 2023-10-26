// Imports React
import { useEffect, useState } from 'react';import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css'

// Imports from pages
import MainScreen from './pages/MainScreen';
import RegisterContribution from './pages/RegisterContribution';
import RegisterDebt from './pages/RegisterDebt';
import RegisterEntry from './pages/RegisterEntry';
import RegisterExpense from './pages/RegisterExpense';

// Import Components
import { urlDataBase } from './components/urlDataBase';

// Import Custom-hooks
import { useFetch } from './hooks/useFetch';

function App() {

  const [refresh, setRefresh] = useState(false);
  const {data} = useFetch(urlDataBase[0]);

  useEffect(() => {
    },[refresh]);


  return (
    <div className="divApp">
    <Toaster 
        position="bottom-center"
        reverseOrder={false}
      />
      <header>
        <h1 className="h1App">Financial System</h1>
        {data && <h2>Balance: $ {data[0].total}</h2>}
        
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
          <Route 
            path="/Register-Entry" 
            element={<RegisterEntry 
                        setRefresh={setRefresh}
                        data={data}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App