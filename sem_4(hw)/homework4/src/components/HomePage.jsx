import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h2>Главная страница</h2>
            <p>Добро пожаловать на главную страницу</p>
            <Link to= '/about'>Перейти на страницу о нас</Link>
        </div>
    );
}

export default HomePage;