import BluePrint from '../../BluePrint/BluePrint'

export default abstract class Migration {
  abstract up(bluePrint: BluePrint): void
  abstract down(): void
}
