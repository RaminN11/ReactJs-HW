import { useState } from "react";
import "./comments.css"; // Подключаем стили

function Comment() {
  const [comments, setComments] = useState([]);
  const [inputComments, setInputComments] = useState('');

  const addComment = () => {
    if (inputComments.trim() === '') return;

    const newComment = {
      id: Date.now(),
      text: inputComments.trim()
    };

    setComments([...comments, newComment]);
    setInputComments('');
  };

  const inputChange = (e) => {
    setInputComments(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="comment-container">
      <div className="comment-input-group">
        <input
          placeholder="Добавить комментарий"
          type="text"
          value={inputComments}
          onChange={inputChange}
          onKeyUp={keyPress}
        />
        <button onClick={addComment}>Добавить</button>
      </div>

      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;

