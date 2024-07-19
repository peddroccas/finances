import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

export function Transactions() {
  const data = [
    ['Desenvolvimento de site', 'R$ 1.200,00', 'Venda', '13/02/2024'],
    ['Hamburguer', 'R$ -23,00', 'Alimentação', '13/02/2024'],
  ]
  return (
    <div>
      <Header />
      <Summary />

      <div className="mx-auto mb-0 mt-16 w-full max-w-[1120px] px-6 py-0">
        <table className="b w-full border-separate border-spacing-x-0 border-spacing-y-2">
          <tbody>
            {data.map((line) => (
              <tr key={line[0]}>
                {line.map((item, index) => (
                  <td
                    key={item}
                    className={`bg-gray-700 px-8 py-6 first:w-1/2 first:rounded-l-md last:rounded-r-md ${index === 1 ? (!item.includes('-') ? 'text-green-300' : 'text-red-300') : ''}`}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
