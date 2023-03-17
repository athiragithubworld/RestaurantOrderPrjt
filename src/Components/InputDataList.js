import React from "react";
import Input from "./Input";

const InputDataList = (props) => {
    const orderDeleteHandler = () => {
        // props.onDelete(props.orderid)
    }

return(
    <div>
        
         <ul > 
                {props.table.map(order => 
                <li key={order.orderid}>
                    {order.price} - {order.dish} - {order.table} <button onClick={orderDeleteHandler}>Delete</button>
                    </li>
                    )}
            </ul>

            {/* <ul className={`${props.className} && ${props.table}`?"Table 1":''}>
                {props.users.map(user => 
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                    </li>
                    )}
            </ul>

            <ul>
                {props.users.map(user => 
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                    </li>
                    )}
            </ul> */}
    </div>
)

}

export default InputDataList;