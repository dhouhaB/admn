import React, { useState } from 'react'
import './Users.css'
import _ from 'lodash'
import { useEffect } from 'react';


import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from '../Navbar/Navbar';

/*const pageSize = 2;*/

const Users = () => {


    const [data,setData] = React.useState([])
    const [order,setOrder] = useState("ASC")
    
    const [coinsData,setcoinsData]=useState([])
    const[postsPerPage,setPostsPerPage]=useState(0)
    
    const [currentPage,setCurrentPage] = useState(1)
    
    useEffect(() => {
    
    const fetchData = async()=> { 
    
    
    let list =[];
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push({id:doc.id,...doc.data()});
    
      
    });
    setData(list);
  
  
  }
    catch(err){
      console.log(err)
    }
    
    };
    fetchData()}, []); 


/*
const pageCount = data ?Math.ceil(data.length/pageSize) :0;
const pages =_.range(1,pageCount+1)
*/
const lastPostIndex=currentPage+postsPerPage;


const firstPostIndex= lastPostIndex -postsPerPage;
data.slice(firstPostIndex,lastPostIndex)
const sorting =(col)=>
{
  if(order==='ASC')
  {
    const sorted  =[...data].sort ((a,b)=>
   a[col].toLowerCase()>b[col].toLowerCase()? 1:-1)
   setData(sorted);
   setOrder("DSC");
  }
  if(order==='DSC')
  {
    const sorted  =[...data].sort ((a,b)=>
   a[col].toLowerCase()<b[col].toLowerCase()? 1:-1)
   setData(sorted);
   setOrder("ASC");
  }
}
const sorting1 =(col)=>
{
  if(order==='ASC')
  {
    const sorted  =[...data].sort ((a,b)=>
   a[col]>b[col]? 1:-1)
   setData(sorted);
   setOrder("DSC");
  }
  if(order==='DSC')
  {
    const sorted  =[...data].sort ((a,b)=>
   a[col]<b[col]? 1:-1)
   setData(sorted);
   setOrder("ASC");
  }
}

  return (
    <>
    <Navbar/>
    <div className="table-container">

<table class="table">
    <thead>

<tr>

<th>id:</th>
<th onClick={()=>sorting("name")}>Name:</th>
<th onClick={()=>sorting1("age")}>Age:</th>

<th onClick={()=>sorting1("phone")}>Phone:</th>

<th onClick={()=>sorting("gender")}>Gender:</th>
</tr>
    </thead>
<tbody>









{data.map((datos) =>

<tr>

<td>
{datos.id}
</td>
<td>
{datos.name}
</td>
<td>
{datos.age}
</td>
<td>
{datos.phone}
</td>
<td>
{datos.gender}
</td>
</tr>


)}





</tbody>







</table>













{
  /*



<nav>
  <ul className='pagination'> 
  {
    pages.map((page)=>
    (
      <li className='page-link'>{page}</li>
    ))
  }
  
 

  </ul>
</nav>

*/}


    </div>
 
    </>
  )
}

export default Users