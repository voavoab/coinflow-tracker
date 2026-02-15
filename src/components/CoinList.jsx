import React from 'react'
import CoinCard from './CoinCard'

function CoinList({ coins, onDelete, onUpdate }) {
  const successfulCoins = coins.filter(coin => coin.status === 'successful')
  const unsuccessfulCoins = coins.filter(coin => coin.status === 'unsuccessful')

  if (coins.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="text-gray-400 mb-2">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No coins tracked yet</h3>
        <p className="text-gray-500">Add your first coin to start tracking your portfolio</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {successfulCoins.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">Successful Coins ({successfulCoins.length})</h2>
          </div>
          <div className="space-y-3">
            {successfulCoins.map(coin => (
              <CoinCard
                key={coin.id}
                coin={coin}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        </div>
      )}

      {unsuccessfulCoins.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">Unsuccessful Coins ({unsuccessfulCoins.length})</h2>
          </div>
          <div className="space-y-3">
            {unsuccessfulCoins.map(coin => (
              <CoinCard
                key={coin.id}
                coin={coin}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CoinList