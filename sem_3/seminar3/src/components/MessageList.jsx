import { messages } from "./data";
import Message from "./Message";
import { PropTypes } from "prop-types";

export default function MessageList({themeColor}) {
    return (
    <div>
        {messages.map((message) => (
            <Message themeColor={themeColor} key={message.id} {...message} />
        ))}
    </div>
    );
};

MessageList.propTypes = {
    themeColor: PropTypes.string,
}