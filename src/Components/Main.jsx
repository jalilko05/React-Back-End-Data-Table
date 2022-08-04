import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css';


    
 function Main() {
    const [data,setData] =  useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then(result=>setData(result))
    },[])


    return (
         <div>
                    <table >
                     <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Suite</th>i
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>phone</th>
                        <th>Web Site</th>
                      </tr>
                     </thead>
                    <tbody>
                     {
                        data.map(value=>{
                            return(
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address.street}</td>
                                    <td>{value.address.suite}</td>
                                    <td>{value.address.city}</td>
                                    <td>{value.address.zipcode}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.website}</td>
                                  
                                    
                                </tr>
                            )
                        })
                     }
                    </tbody>
                  </table>
         </div>
    )

          
    }
        

export default Main