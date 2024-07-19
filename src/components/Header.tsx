import logoImg from '../assets/finances.svg'
export function Header() {
  return (
    <header className="bg-gray-900 px-0 pb-[7.5rem] pt-10">
      <div className="mx-auto my-0 flex w-full max-w-[1120px] items-center justify-between px-6 py-0">
        <img src={logoImg} alt="" />
        <button className="h-12 cursor-pointer rounded-md border-0 bg-green-500 px-5 py-0 font-bold text-white hover:bg-green-700 hover:transition-colors hover:duration-500">
          Nova transação
        </button>
      </div>
    </header>
  )
}
