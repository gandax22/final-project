
const express = require('express')
const app = express()
const port = 5000
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db', (err) => {
if (err) {
console.log('База данных не работает', err)
}else{
console.log('База данных работает')
}
})
let sql = 'CREATE TABLE IF NOT EXISTS users(username TEXT, password TEXT)'
db.run(sql)
app.use(express.json());

app.post('/register', (req, res) => {
    sql = 'INSERT INTO users(username, password) VALUES(?, ?)' 
const { username, password } = req.body;
db.run(sql, [username, password], (err) => {
if (err) {
console.log(err)
res.send('Ошибка при регистрации пользователя')
}else{
res.send('Пользователь успешно зарегистрирован')
}
})
})

app.post('/login', (req, res) => {
    const { username, password } = req.body; 
    sql = 'SELECT * FROM users WHERE username = ? AND password = ?' 
    db.get(sql, {username, password}, (err, row) => { 
      if (err || !row) {
        res.send(' Ошибка при авторизации пользователя')
      } else {
        res.send('Пользователь авторизовался')
      }
    })
})

app.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`)
})





