import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);

    const upCounter = () => {
        setCount(count + 1);
    }

    const downCounter = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p>Счетчик: {count}</p>
            <Button variant = "contained" onClick={downCounter}>Уменьшить на 1</Button>
            <Button variant="contained" onClick={upCounter}>Увеличить на 1</Button>
        </div>
    );
}

export default Counter;
