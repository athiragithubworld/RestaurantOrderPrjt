import React, {useState} from "react";

import Input from "./Components/Input";
// import InputDataList from "./Components/InputDataList";

function App(props) {
  // const [tableList , setTableList] = useState([]);

 

//   const addOrderListHandler = (orderprice ,orderdish,ordertable,orderid ) =>{
    
//     // setTableList((prevOrderList) => {
      
//     // return [...prevOrderList ,{price:orderprice ,dish:orderdish ,table:ordertable,orderid:orderid}]
      
//     // })
// }

return (
    <div>
      
      <Input></Input> 
      {/* onAddOrderList={addOrderListHandler} */}
      {/* <InputDataList table={tableList}></InputDataList> */}
    </div>
  );
}

export default App;
