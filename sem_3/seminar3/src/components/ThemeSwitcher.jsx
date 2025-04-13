import MessageList from "./MessageList";
import { useState } from "react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");

    function switchTheme() {
        if (theme === 'light') {
            setTheme("dark")
            document.querySelector("body").style.backgroundColor = "black";
        } else {
            setTheme("light");
            document.querySelector("body").style.backgroundColor = "white";
        }
    }

    return (
        <div>
            <button onClick={switchTheme}>SwitchTheme</button>
            <MessageList themeColor={theme} />
        </div>
    )
};