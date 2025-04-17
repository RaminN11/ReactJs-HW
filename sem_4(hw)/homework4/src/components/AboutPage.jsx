import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div>
            <h2>Страница обо мне</h2>
            <p>Добро пожаловать на страницу обо мне</p>
            <Link to = '/'>Главная страница</Link>
        </div>
    );
}

export default AboutPage;