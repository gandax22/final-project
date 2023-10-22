import React, { useState } from "react"
import { useLocalStorage } from "./../../hook/hook"
import ChatBlock from "./chat-block"
import Comment from "./comment"
const Chat = () => {
  const [chatData, setChatData] = useLocalStorage("CHAT", []);
  const [inputValue, setInputValue] = useState("");
  const [showDialogReg, setShowDialogReg] = useState(false);
  const user = localStorage.getItem('username')
  const changeChat = () => {
    if (inputValue !== '') {
      if (user) {
        setChatData([...chatData, `${user ? user : "Аноним"}: ${inputValue}`]);
        setInputValue("");
      } else {
        setShowDialogReg(true);
        setInputValue("");
      }
    } else {
      alert('Ошибка отправки, заполните поле ввода')
    }
  };
  const deleteMsg = (index) => {
    if (user) {
      const newData = [...chatData];
      newData.splice(index, 1);
      setChatData(newData);
    } else {
      alert('Ошибка при удалении сообщения, авторизуйтесь')
    }
  }
  const deleteHistory = () => {
    if (user) {
      setChatData([])
    } else {
      alert('Ошибка при удалении истории, авторизуйтесь')
    }
  }
  return (
    <div>
      <ChatBlock chatData={chatData} deleteMsg={deleteMsg} />
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeChat={changeChat}
        showDialogReg={showDialogReg}
        deleteHistory={deleteHistory}
      />
    </div>
  );
};

export default Chat;
