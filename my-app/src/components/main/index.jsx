import { Route, Routes } from "react-router-dom"
import styles from "./styles.module.css"
import Home from "../home/home"
import Chat from "../chat"
import RestApi from "../api/api"
const Main = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/test" element={<RestApi />} />
            </Routes>
        </div>

    )
}
export default Main