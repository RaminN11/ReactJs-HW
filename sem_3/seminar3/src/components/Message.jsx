import { PropTypes } from 'prop-types';
import "./message.css"

export default function Message({ text, time, author, themeColor }) {
    return (
        <div>
            <h4 className={themeColor === 'light' ? "light" : "dark"}>Author: {author}</h4>
            <p className={themeColor === 'light' ? "light" : "dark"}>{text}</p>
            <p className={themeColor === 'light' ? "light" : "dark"}>Time: {time}</p>
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
};