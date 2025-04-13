import { useState } from 'react';
import "./counter.css"
// Первый способ

// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <span>{count}</span>
//             <button onClick = {() => {setCount (item=>++item)}}>Click +1</button>
//         </div>
//     );
// }

// export default Counter;

// Второй способ

function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1)
    }
    return ( 
        <div className = 'btn'>
        <span>{ count }</span>
        <button onClick = { updateCount }>Click +1</button>
        </div>
     );
}

export default Counter;
