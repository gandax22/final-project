import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
const Home = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggenUsers, setIsLoggenUsers] = useState(false)
    const [flag, setFlag] = useState(false)
  
    useEffect(() => {
        const storedUsername = localStorage.getItem('username')
        const storedPassword = localStorage.getItem('password')
        const storedisLoggenUsers = localStorage.getItem('isLoggenUsers')
        if (storedUsername && storedPassword && storedisLoggenUsers) {
            setUsername(storedUsername)
            setPassword(storedPassword)
            setIsLoggenUsers(true)
        }
    }, []) 
    const registerUsers = async () => {
        if (username && password !== '') {
             const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });


        if (response.ok) {
            setIsLoggenUsers(true)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('isLoggenUsers', 'true')
            alert('Пользователь успешно зарегистрирован');
        } else {
            alert('Ошибка при регистрации пользователя');
        }
        }else{
            alert('Ошибка при регистрации пользователя, заполните все поля')
        }
       
    }
    const loginUsers = async () => {
       if (username && password !== '') {
          const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            setIsLoggenUsers(true)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('isLoggenUsers', 'true')
            alert(`Вы вошли в аккаунт под логином ${username}`)
        } else {
            alert('Неверные имя пользователя или пароль')
        }
       }else{
        alert('Ошибка при авторизации пользователя, заполните все поля')
       }
      
    }
    const Logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        localStorage.removeItem('isLoggenUsers', 'false')
        setIsLoggenUsers(false)
    }

    return (
        <div>
            {!isLoggenUsers ? (
                <div>
                    {!flag ? (
                        <div className={styles.body}>
                            <div className={styles.container}>
                            <h1 className={styles.head}>Регистрация</h1>
                            <input
                                type="text"
                                placeholder="Логин пользователя"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.inputUser}
                            />
                            <input
                                type="password"
                                placeholder="Пароль пользователя"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputPassword}
                            />
                            <button onClick={registerUsers} className={styles.btn}>Регистрация</button>
                            <p className={styles.text}>Есть аккаунт?</p>
                            <button onClick={() => setFlag(true)} className={styles.btnLogIn}>Войти в аккаунт</button>
                            </div>
                        </div>
                    ) : (
                            <div className={styles.body}>
                                <div className={styles.container}>
                                <h1 className={styles.head}>Авторизация</h1>
                                <input
                                    type="text"
                                    placeholder="Логин пользователя"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={styles.inputUser}
                                />
                                <input
                                    type="password"
                                    placeholder="Пароль пользователя"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={styles.inputPassword}
                                />
                                <button onClick={loginUsers} className={styles.btn}>Авторизироваться</button>
                                <p className={styles.text}>Нет аккаунт?</p>
                                <button onClick={() => setFlag(false)} className={styles.btnLogIn}>Зарегистрировать аккаунт</button>
                                </div>
                            </div>
                    )}

                </div>

            ) : (
                <> 
                <div className={styles.cont}>
                <div className={styles.profile}>
                    <h1 className={styles.data}>Вы авторизовались под логином: {username}</h1>
                    <h1 className={styles.data}>Ваш пароль: {password}</h1>
                    <button onClick={Logout} className={styles.text}>Выйти из аккаунта</button>
                </div>
                </div>
                    
                </>

            )}

        </div>
    )
}
export default Home