import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../actions/Actions";

export default function EditProduct({ product, onClose}) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({...product});

    const handleChange = (e) => {
            setForm({...form, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(updateProduct(form));
            setForm({ name: '', description: '', price: '', available: true });
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <h1>Редактировать продукт</h1>
                <input name='name' value={form.name} onChange={handleChange} placeholder='Название продукта' required />
                <input name='description' value={form.description} onChange={handleChange} placeholder='Описание продукта' required />
                <input name='price' value={form.price} onChange={handleChange} placeholder='Стоимость продукта' required />
                <label>
                    <h2>Доступен:</h2>
                    <input type='checkbox' name='available' checked={form.available} onChange={() => setForm({...form, available: !form.available })}/>
                </label>
                <button type='submit'>Сохранить</button>
                <button type="button" onClick={onClose}>Отмена</button>
            </form>
        ) 
}