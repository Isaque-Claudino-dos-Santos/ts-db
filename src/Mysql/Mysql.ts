import { DBConfig } from '@Types/TypeDataBase'
import DataBase from '../DataBase/DataBase'
import msyql2 from 'mysql2'

export default class Mysql extends DataBase {
  constructor(config: Omit<DBConfig, 'dialect'>) {
    super({ ...config, dialect: 'msyql' })
  }

  public onConnection(): msyql2.Connection {
    return msyql2.createConnection({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database,
    })
  }
}
