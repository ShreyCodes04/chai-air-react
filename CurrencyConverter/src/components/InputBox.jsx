export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  return (
    <div className="flex justify-between items-end bg-gray-800/70 p-4 rounded-xl shadow-lg 
                    transition-all hover:shadow-blue-500/40 hover:scale-[1.01]">
      {/* Label & Input */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-1">{label}</label>
        <input
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`w-32 rounded-lg px-3 py-2 bg-black/60 text-white border border-gray-600 
                      focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                      transition-all duration-200 hover:border-blue-400 hover:shadow-md 
                      hover:shadow-blue-500/30
                      ${amountDisable ? "opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Currency Dropdown */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-1">Currency</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-3 py-2 bg-black/60 text-white border border-gray-600 
                     focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500
                     transition-all duration-200 hover:border-purple-400 hover:shadow-md 
                     hover:shadow-purple-500/30"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
