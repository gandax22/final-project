import styles from "./styles.module.css";
const ChatBlock = (props) => {
    return (
        <div className={styles.chat}>
        <div className={styles.container}>
            <div className={styles.head}>Чат</div>
            {props.chatData.map((el, index) => {
                return (
                    <div key={index} className={styles.msg}>
                        {index + 1}.{el} <button onClick={() => props.deleteMsg(index)}>Удалить</button>
                    </div>
                )
            }
            )}
        </div>
        </div>
    )

}
export default ChatBlock;
