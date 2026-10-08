/** Ordena de lo más reciente a lo más antiguo según el primer año de `date`. */
export function newestFirst<T extends { date: string }>(items: T[]): T[] {
  const year = (d: string) => parseInt(d, 10) || 0
  return [...items].reverse().sort((a, b) => year(b.date) - year(a.date))
}
