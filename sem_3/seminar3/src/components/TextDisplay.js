import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

function TextDisplayForm() {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);

    function clickHandler() {
        setText(text);
        setShow(true);
    }
    return (
        <>
        <TextField 
        onChange={(e) => setText(e.target.value)}
        fullWidth
        id = 'outlined-basic'
        label = "Введите текст"
        variant="outlined"
        value = {text}
        style={ {marginBottom: 20 } }
        />
        <Button 
        onClick={clickHandler}
        fullWidth
        variant="contained"
        style={{ marginBottom: 20 }}
        >
            Отобразить текст
        </Button>
        {show && <Typography variant="h5">{text}</Typography>}
        </>
    );
}

export default TextDisplayForm;