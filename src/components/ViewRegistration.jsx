import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewRegistration = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationBar/>
         <div className="container mt-4 c1">
        <h2 className="text-center mb-4">View All REGISTRATION</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Reg-No</th>
              <th> Full Name</th>
              <th>Branch</th>
              <th>Sslc Mark</th>
              <th>PlusTwo Mark</th>
             
              <th>Ug Mark</th>
              <th>Pg Mark </th>
              
            </tr>
          </thead>

          <tbody>
           
           {
            data.map(
                (value,index)=>{
                    return(
                        <tr>
              <td>{value.regNo}</td>
              <td>{value.fullName}</td>
              <td>{value.branch}</td> 
              <td>{value.sslcMark}</td> 
              <td>{value.plusTwoMark}</td> 
              <td>{value.ugMark}</td> 
              <td>{value.pgMark}</td> 
               
            </tr>
                    )
                }
            )
           }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewRegistration