import React from 'react'

function Stats({ successful, unsuccessful }) {
  const totalInvested = [...successful, ...unsuccessful].reduce((sum, coin) => sum + coin.investmentAmount, 0)
  const totalCurrentValue = [...successful, ...unsuccessful].reduce((sum, coin) => sum + coin.currentValue, 0)
  const totalProfitLoss = totalCurrentValue - totalInvested
  const isProfit = totalProfitLoss >= 0

  const successfulInvested = successful.reduce((sum, coin) => sum + coin.investmentAmount, 0)
  const successfulCurrentValue = successful.reduce((sum, coin) => sum + coin.currentValue, 0)
  const successfulProfitLoss = successfulCurrentValue - successfulInvested

  const unsuccessfulInvested = unsuccessful.reduce((sum, coin) => sum + coin.investmentAmount, 0)
  const unsuccessfulCurrentValue = unsuccessful.reduce((sum, coin) => sum + coin.currentValue, 0)
  const unsuccessfulProfitLoss = unsuccessfulCurrentValue - unsuccessfulInvested

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-600">Total Portfolio</h3>
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold text-gray-900">${totalCurrentValue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Current Value</p>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className={`text-lg font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
              {isProfit ? '+' : ''}{totalProfitLoss >= 0 ? '$' : '-$'}{Math.abs(totalProfitLoss).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Total P/L</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-600">Successful Coins</h3>
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold text-gray-900">{successful.length}</p>
            <p className="text-sm text-gray-500">Total Coins</p>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-lg font-semibold text-green-600">
              +${Math.abs(successfulProfitLoss).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Total P/L</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-600">Unsuccessful Coins</h3>
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold text-gray-900">{unsuccessful.length}</p>
            <p className="text-sm text-gray-500">Total Coins</p>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-lg font-semibold text-red-600">
              -${Math.abs(unsuccessfulProfitLoss).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Total P/L</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats