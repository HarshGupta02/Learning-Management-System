import './App.css';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Personal from './Components/Personal';
import Logout from './Components/Logout';
import Timetable from './Components/Timetable';
import Home from './Components/Home';
import Attendance from './Components/Attendance';
import LoginAdmin from './Components/LoginAdmin';
import Payment from './Components/Payment';
import StripeContainer from './Components/StripeContainer';
import { createContext, useReducer } from 'react';
import { initialState, reducer} from '../src/reducer/UseReducer';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Se_Syllabus from './Components/Se_Syllabus';
import Website from './Components/website';
import Myherupa from './Components/Myherupa';

export const UserContext = createContext();

const promise = loadStripe(
  'pk_test_51KR8R1SIj9g28rKLoublcGWKYTSVVnGEqAPy2HorkcYA3er9HabaZSBZs2yV37nakwLfv7NtnOjAyETW3yOVD8iN00Wtujn5Wj'
);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Header/>
      {/* <Route path = "/registeration1">
        <Navbar1/>
      </Route> */}
      <Navbar/>
      <Route path = "/home">
        <Home/>
      </Route>
      <Route path = "/se_syllabus"> 
        <Se_Syllabus />
      </Route>
      <Route path = "/personal">
        <Personal/>
      </Route>
      <Route path = "/myherupa">
        <Myherupa/>
      </Route>
      <Route path = "/website">
        <Website/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/registeration">
        <Registeration/>
      </Route>
      <Route path = "/payment">
        <StripeContainer />
      </Route>
      <Route path = "/attendance">
        <Attendance />
      </Route>
      <Route path = "/timetable">
        <Timetable />
      </Route>
      <Route path = "/loginadmin">
        <LoginAdmin />
      </Route>
      <Route path = "/logout">
        <Logout/>
      </Route>
      <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;