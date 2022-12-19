import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {

  const {state, dispatch} = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method : "GET",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json"
      },
      credentials : "include"
    }).then((res) => {
      dispatch({type : "USER", payload : false});
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }else history.push("/login", {replace : true});
    }).catch((err) => {
      console.log(err);
    })
  })

  return (
    <div class="loader">
        {/* <h1>Logout page</h1> */}
        {/* <div class="loader"></div> */}
    </div>
  )
}

export default Logout