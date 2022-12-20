import 'dotenv/config'
import Mysql from './Mysql'

const mysql = new Mysql({
  user: 'isaque',
  password: 'Isaquedj1@',
  database: 'test',
})
const connect = mysql.onConnection()
