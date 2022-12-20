export type Dialect = 'msyql'

export type DBConfig = {
  /**@default "localhost" */
  host?: string
  /**@default 3306 */
  port?: number
  database: string
  user: string
  password: string
  dialect: Dialect
}
