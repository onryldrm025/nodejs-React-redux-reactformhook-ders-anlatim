import './App.css';
import UserAddForm from './components/UserAddForm'
import UserTable from './components/UserTable'
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { useGetUsersQuery } from './redux/services/usersService'



const App = () => {

  const { data, error, isLoading,refetch } = useGetUsersQuery()

  const users = useSelector((state) => {
    return state.user.myUsers
  })

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <div className="App">

      <UserAddForm refetch={refetch} />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((e, key) => <div key={key}>
            <span>{e.name} </span>
            <span>{e.age}</span>
          </div>)}
        </>
      ) : null}
      {/* <div className='Usertable'>
        <UserTable users={users} />
      </div> */}
    </div>
  );
}


export default App;
