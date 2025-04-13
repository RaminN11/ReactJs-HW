import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
function TemperatureConverter() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const celsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (value === '' || isNaN(value)) {
            setFahrenheit('');
        } else {
            const f = (parseFloat(value) * 9) / 5 + 32;
            setFahrenheit(f.toFixed(2));
        }
    };

    const fahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value === '' || isNaN(value)) {
            setCelsius('');
        } else {
            const c = ((parseFloat(value) - 32) * 5) / 9;
            setCelsius(c.toFixed(2));
        }
    }

    return (
        <div>
            <TextField 
            label = "Цельсий (`C)"
            variant = 'outlined'
            fullWidth
            margin='normal'
            value={celsius}
            onChange={celsiusChange}
            />

            <TextField 
            label="Фарингейт (`F)"
            variant = "outlined"
            fullWidth
            margin='normal'
            value={fahrenheit}
            onChange={fahrenheitChange}
            />
        </div>
    );
}

export default TemperatureConverter;