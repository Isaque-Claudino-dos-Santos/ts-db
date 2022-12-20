import { DBConfig, Dialect } from '@Types/TypeDataBase'

export default abstract class DataBase {
  protected readonly host: string = 'localhost'
  protected readonly port: number = 3306
  protected readonly database: string
  protected readonly user: string
  protected readonly password: string
  protected readonly dialect: Dialect

  constructor(config: DBConfig) {
    Object.assign(this, { ...config })
  }
}
