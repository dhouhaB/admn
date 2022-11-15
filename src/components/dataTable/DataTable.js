import * as React from "react";
import { useEffect } from 'react';

import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../datatablesource";

import { collection, query, where, getDocs } from "firebase/firestore";
import { listClasses } from "@mui/material";
import { db } from "../../firebase";
import { grey } from "@mui/material/colors";



const DataTable = () => {

const [data,setData] = React.useState([])
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


const acetionColumn= [{field:"action",headerName:"Action",width:250,renderCell:()=>
{
return (
  <div className="cellAction">
    <div className="viewButton">view</div>
    <div className="deleteButton">delet</div>


  </div>
)


}}]






  return (
    <div className="stylegrid" style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={data}
        columns ={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowSpacing={params=>
        ({
          top:params.isFirstVisible? 0:5  ,
          buttom:params.isLastVisible ?0 : 5  })
        }
        sx={{[`&.$(gridClasses.row)`]:
        {
          bgcolor:grey
        }}}
        
       
      />
    </div>
  )
}

export default DataTable