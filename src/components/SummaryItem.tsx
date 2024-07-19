import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

interface SummaryItemProps {
  type: 'Entradas' | 'Saídas' | 'Total'
}

export function SummaryItem({ type }: SummaryItemProps) {
  function Icon(): JSX.Element {
    switch (type) {
      case 'Entradas':
        return <ArrowCircleUp size={32} color="#00b37e" />
      case 'Saídas':
        return <ArrowCircleDown size={32} color="#f75a68" />
      case 'Total':
        return <CurrencyDollar size={32} color="#fff" />
    }
  }

  return (
    <div className="rounded-md bg-gray-600 p-8">
      <header className="flex items-center justify-between text-gray-300">
        <span>{type}</span>
        <Icon />
      </header>

      <strong className="mt-4 block text-[2rem]">R$ 17.400,00</strong>
    </div>
  )
}
