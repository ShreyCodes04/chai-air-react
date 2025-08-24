import { useState } from 'react'
import { InputBox } from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom((prev) => {
      const newFrom = to
      setTo(prev)
      return newFrom
    })
    setConvertedAmount(amount * currencyInfo[to])
  }

  const convert = () => {
    if (!amount || amount <= 0) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center 
                 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-700 rounded-2xl 
                        p-8 backdrop-blur-lg bg-gray-900/60 
                        shadow-2xl shadow-blue-500/20 
                        transition-all hover:shadow-blue-400/40 hover:scale-[1.02]">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            {/* From */}
            <div className="w-full mb-6">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(val) => setAmount(val)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5 my-8">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                           rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white px-6 py-2 font-semibold shadow-md 
                           shadow-blue-500/50 hover:scale-125 
                           hover:shadow-purple-500/70 transition-transform"
                onClick={swap}
              >
                ⇆ Swap
              </button>
            </div>

            {/* To */}
            <div className="w-full mt-6 mb-8">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                         text-white px-6 py-4 rounded-xl font-bold tracking-wide 
                         shadow-lg shadow-purple-600/40 
                         hover:scale-110 hover:shadow-purple-500/70 
                         transition-all"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
