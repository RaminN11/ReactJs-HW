import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, toggleAvailbility, updateProduct } from "../actions/Actions";
import EditProduct from "./EditComponent";

export default function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);

    return (
        <div>
        <h2>Список продуктов</h2>
        {products.map((product) =>
          editId === product.id ? (
            <EditProduct key={product.id} product={product} onClose={() => setEditId(null)} />
          ) : (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Цена: {product.price} рублей</p>
                <p>Статус: {product.available ? 'Доступен' : "Недоступен"}</p>
                <button onClick={() => dispatch(toggleAvailbility(product.id))}>Переключить доступность</button>
                <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
                <button onClick={() => setEditId(product.id)}>Редактировать</button>
            </div>
          )
        )}
      </div>
    );
}