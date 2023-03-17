import React , {useState,useRef} from "react";


const Input =() =>{

    const [orderId,setOrderId] = useState('');
    const [price,setPrice] = useState('');
    const [dish,setDish] = useState('');
    // const [table,setTable] = useState('');
    const tableRef = useRef();

    const [table1,setTable1]=useState([]);
    const [table2,setTable2]=useState([]);
    const [table3,setTable3]=useState([]);
// console.log("111",table1);

    const orderIdHandler = (event) =>{
        setOrderId(event.target.value);
    }

    const priceHandler = (event) =>{
        setPrice(event.target.value);
    }

    const dishHandler = (event) =>{
        setDish(event.target.value);
    }

    // const tableHandler = (event) =>{
    //     console.log("Hello")
    //     setTable(event.target.value);
    // }
    

    

    const orderSubmitHandler = (event) =>{
        event.preventDefault();
        const selectTable =tableRef.current.value;

        // const data= [price,dish,selectTable,orderId];
        // console.log(data);

        if(selectTable==="Table 1" && orderId.trim().length !==0 && price.trim().length !== 0 && dish.trim().length!==0){
            // setTable1([...table1,data])
            // console.log("Hi")
            setTable1(prevList => {
                const tab = [...prevList,{price:price ,dish:dish ,table:selectTable,orderid:orderId}]
                // console.log("tab",tab);
                return tab;
            });
        }
        else if(selectTable==="Table 2" && orderId.trim().length !==0 && price.trim().length !== 0 && dish.trim().length!==0){
            setTable2(prevList => {
                return[...prevList,{price:price ,dish:dish ,table:selectTable,orderid:orderId}]
            });
        }
        else if(selectTable==="Table 3" && orderId.trim().length !==0 && price.trim().length !== 0 && dish.trim().length!==0){
            setTable3(prevList => {
                return[...prevList,{price:price ,dish:dish ,table:selectTable,orderid:orderId}]
            });
        }
        

        if(orderId.trim().length ===0 || price.trim().length === 0 || dish.trim().length===0 ){
            alert("Please Enter valid id and price and dish");
            return;
        }
        
        // props.onAddOrderList(price,dish,selectTable,orderId)
        setOrderId('');
        setPrice('');
        setDish('');


    }

    const orderDeleteHandler = (orderIds,table) => {
        // event.preventDefault();
        // console.log("Helooooooooooooo")
        // console.log("id",orderIds);
        // console.log("table1",table1);
        
        if(table==="Table 1"){
            
        const updatedOrderList = table1.filter(order => order.orderid !== orderIds)
        setTable1(updatedOrderList);

        // const updatedOrderList = table1.filter(order => {
        //     // console.log("table1",table1);
        //     // console.log("order.orderId 1",order);
        //     // console.log("orderIds",orderIds);

        //     if(parseInt(order.orderid) !== orderIds){

        //         // console.log("order.orderId2",parseInt(order.orderId));
        //         // console.log("orderIds",orderIds);

               
        //     }
        // })
            // console.log("updatelist",updatedOrderList)
            // setTable1(updatedOrderList);
        
          

        // setTable1(table1 => {
        //   const updatedOrderList = table1.filter(ord => ord.orderId !== orderIds);
        //   console.log("tab1", updatedOrderList)
        //   return updatedOrderList;
        // });

        }

        else if (table ==="Table 2"){

        const updatedOrderList1 = table2.filter(order => order.orderid !== orderIds)
        setTable2(updatedOrderList1);
        }

        else if (table ==="Table 3"){

        const updatedOrderList3 = table3.filter(order => order.orderid !== orderIds)
        setTable3(updatedOrderList3);
        }
      };


    return(
        <div>
            <form > 
                <label htmlFor="orderid">Order ID</label>
                <input 
                type="number"
                id="orderid"
                value={orderId}
                onChange={orderIdHandler}
                ></input>

                <label htmlFor="chooseprice">Choose Price</label>
                <input 
                type="number"
                id="chooseprice"
                value={price}
                onChange={priceHandler}
                ></input>

                <label htmlFor="choosedish">Choose Dish</label>
                <input 
                type="text"
                id="choosedish"
                value={dish}
                onChange={dishHandler}
                ></input>

                <label htmlFor="choosetable">Choose a Table</label>
                <select ref={tableRef}>
                    <option id = "table1" value="Table 1"> Table 1</option>
                    <option id = "table2" value="Table 2"> Table 2</option>
                    <option id = "table3" value="Table 3"> Table 3</option>
                    
                </select>
                <button type="submit" onClick={orderSubmitHandler}> Add to bill </button>
                </form>
                <div>
                    
                <p>Table 1</p>
                <ul id="Tabel 1" className="Table 1">
                    {/* {console.log("table1",table1)} */}
                {table1.map(order => 
                
                <li key={order.orderid}>
                    {order.price} - {order.dish} - {order.table} 
                    <button onClick={() => orderDeleteHandler(order.orderid ,order.table)}>Delete</button>
                    </li>
                    )}
                </ul>
                {/* {console.log("table11111111",table1)} */}
               
                <p>Table 2</p>
                <ul id="Tabel 2" className="Table 2">
                {table2.map(order => 
                <li key={order.orderid}>
                    {order.price} - {order.dish} - {order.table} <button onClick={() => orderDeleteHandler(order.orderid ,order.table)}>Delete</button>
                    </li>
                    )}
                </ul>
                <p>Table 3</p>
                <ul id="Tabel 3" className="Table 3">
                {table3.map(order => 
                <li key={order.orderid}>
                    {order.price} - {order.dish} - {order.table} <button onClick={() => orderDeleteHandler(order.orderid ,order.table)}>Delete</button>
                    </li>
                    )}
                
                </ul>
            </div>
            
        </div>
    )
}

export default Input;