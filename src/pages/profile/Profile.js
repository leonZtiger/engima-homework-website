import React, { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";
import Membership from "../../components/settningsPages/Memebership";
import classes from './style.module.scss'


function Profile() {

  const [auth, setAuth] = useState(true);
  const [settningsPage, setSettPage] = useState(<></>);

  const OptList = [{html: <Membership/>,name:"Membership"}]

  useEffect(() => {
    const token = sessionStorage.getItem("Auth token");

    if (token) {
      setAuth(true)
    }
    else {
      //  setAuth(false)
    }
  }, [])

  return (
    <div className={classes.container}>
      {
        auth ?
          <>
            <h1>Your account</h1>
            <div className={classes.accountContainer}>

              <ul className={classes.detailList}>
                {
                  OptList.map((item) => (
                    <li onClick={()=>setSettPage(item.html)} className={classes.item}>
                      <h2>{item.name}</h2>
                    </li>
                  ))
                }


              </ul>

              <div className={classes.DetailContainer}>
                {
                  settningsPage
                }
              </div>
            </div>
          </>

          :
          <div className={classes.signinAlert}>
            <h2>Login in to view this page</h2>
          </div>
      }

    </div>
  );
}

export default Profile