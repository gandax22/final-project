import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Header =  () =>{
    return(
    <div className={styles.module}>
    <nav className={styles.navigation}>
        <Link to="/" className={styles.a}>Home Pages</Link>
        <Link to="/chat" className={styles.a}>Messages</Link>
        <Link to="/test" className={styles.a}>Api</Link>
    </nav>
    </div>
    )
}
export default Header