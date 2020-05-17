import React from "react";
import styles from './Navigation.module.css';
import AppAvatar from "./Avatar";
import UserProvider from '../providers/UserProvider'



  class UserWindow extends React.Component {


  render () {
   

    return ( <UserProvider>
        {(user) => {
        return (
        <>
        {user ? <div className={styles.userWindow}>
          <AppAvatar user={user}/>
          <div>
          <h2 style={{ marginBottom: '5px', marginTop: '0', fontWeight: '600', letterSpacing: '0.05em'}} >Hello! <br></br> Have a nice day :D </h2>
          </div>  
      </div> : null
   }
   </>
   )}}
   </UserProvider>
   )}};

   export default UserWindow;