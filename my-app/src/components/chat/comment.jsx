import styles from "./styles.module.css"
import { Link } from "react-router-dom"
const Comment = (props) => {
    return (
        <div className="comment">
            <div className={styles.wrapper}>
            <input
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
                className={styles.input}
                placeholder="Напиши сообщение"
            />
            <button onClick={props.changeChat} className={styles.btn}>Отправить</button>
            <button onClick={props.deleteHistory} className={styles.btn}>Удалить</button>
        </div>
        {props.showDialogReg && (
                <div className={styles.login}>
                    <p className={styles.text}>Вы не авторизовались перейдите по <Link to="/">Ссылке</Link></p>
                </div>
            )}
        </div>
        

    );
};

export default Comment;
