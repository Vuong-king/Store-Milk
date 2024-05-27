import { Table } from "antd";
import { useState } from "react";


function MilksManagement() {
   
   const [dataSource, setDataSource] = useState([]);
    const columns =[
    {
        title:"Milk Name",
        dataIndex: "name",
        key:"name",
    },

   ]
   
    return (
        <div>
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    );

}

export default MilksManagement;