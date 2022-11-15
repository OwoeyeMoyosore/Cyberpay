import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./container/login";
import { route } from "./utilities/routes";
import Email from "./container/fEmail";
import Forgot from "./container/fPassword";
import Reset from "./container/rPassword";
import Error from "./container/fError";
import ResetF from "./container/rFailed";
import ResetS from "./container/rSuccess";
import Layout from "./components/layout/layout";
import HrBoard from './container/Overview/hrboard';
import DashboardLayout from './components/layout/dashboardLayout';
import Settlement from './container/Overview/settlement';
import ProcessSettlement from './container/Overview/settlement2';
import BankStatement from './container/Overview/bankStatement';
import Notification from './container/Overview/notification';
import Transaction from './container/Overview/transaction';
import SettlementSuccess from './container/Overview/settlementSuccess';
import SettlementTracker from './container/Overview/settlementTracker';
import TransactionFilter from './container/Overview/transactionFilter';


function App() {
  return (
<React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path={route.login} element={<Login/>} />
          <Route path={route.fEmail} element={< Email/>} />
          <Route path={route.fPassword} element={< Forgot/>} />
          <Route path={route.reset} element={< Reset/>} />
          <Route path={route.fError} element={< Error/>} />
          <Route path={route.rFailed} element={< ResetF/>} />
          <Route path={route.rSuccess} element={< ResetS/>} />
        </Route>
         

      <Route element={<DashboardLayout/>}>
      <Route   path={route.hrBoard} element={<HrBoard/>}/>
      <Route path={route.settlement} element={<Settlement />} />
      <Route path={route.settlement2} element={<ProcessSettlement/>} />
      <Route path={route.bankStatement} element={<BankStatement />} />
      <Route path={route.notification} element={<Notification />} />
      <Route path={route.transaction} element={<Transaction />} />
      <Route path={route.settlementSuccess} element={<SettlementSuccess />} />
      <Route path={route.settlementTracker} element={<SettlementTracker />} />
      <Route path={route.transaction2} element={<TransactionFilter />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
    


export default App;
