import { SummaryItem } from './SummaryItem'

enum SummaryType {
  income = 'Entradas',
  expenses = 'Saídas',
  balance = 'Total',
}

export function Summary() {
  return (
    <section className="mx-auto my-0 -mt-20 grid w-full max-w-[1120px] grid-cols-3 gap-2 px-6 py-0">
      <SummaryItem type={SummaryType.income} />
      <SummaryItem type={SummaryType.expenses} />
      <SummaryItem type={SummaryType.balance} />
    </section>
  )
}
