import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
const Api = () => {
    const [data, setData] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        const url = "https://free-nba.p.rapidapi.com/teams?page=0";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            },
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data)
                setIsLoad(false)
            })
    }, [])
    return (
        <div className={styles.container}>
            
            <div className={styles.head}><p>Список команд:</p></div>
            <div className={styles.p}>
                {isLoad && <div className={styles.load}> Загрузка данных... </div>}
            {data.map((el, i) => {
                return (
                    <div key={el.id} className={styles.text}>
                        {i + 1}.{el.abbreviation} {el.city}
                        <img
                            src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1"
                            style={{ width: "15px", height: "15px" }}
                            onClick={() => {
                                setData(
                                    data.filter((filterElement) => el.id !== filterElement.id)
                                );
                            }}

                        />
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}
export default Api