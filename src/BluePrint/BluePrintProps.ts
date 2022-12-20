export default class BluePrintProps {
  NOT_NULL = 'not null'
  PRIMARY_KEY = 'primary key'
  AUTO_INCREMENT = 'auto_increment'
  STRING = (size: number = undefined) => (size ? `varchar(${size})` : 'varchar')
  INT = (size: number = undefined) => (size ? `int(${size})` : 'int')
}
