import { useState } from "react";

function Greeting({ name }) {
    return (
        <div>
            <p>Привет: {name}</p>
        </div>
    )
}

export default Greeting;