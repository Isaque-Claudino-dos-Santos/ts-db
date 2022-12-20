import BluePrintProps from './BluePrintProps'
import { Columns } from '@Types/TypeBluePrint'

export default class BluePrint {
  public table(
    tableName: string,
    columnMake: (prop: BluePrintProps) => Columns
  ): string {
    const query = `CREATE TABLE ${tableName}`
    const columnsObj = columnMake(new BluePrintProps())
    const columnsArray = []
    for (const columnName in columnsObj) {
      const arrayProps = columnsObj[columnName]
      columnsArray.push(columnName + ' ' + arrayProps.join(' '))
    }
    return `${query} (${columnsArray.join(', ')})`
  }
}
