import React, { useState } from 'react'

function CoinCard({ coin, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    currentValue: coin.currentValue,
    status: coin.status
  })

  const profitLoss = coin.currentValue - coin.investmentAmount
  const profitLossPercentage = ((profitLoss / coin.investmentAmount) * 100).toFixed(2)
  const isProfit = profitLoss >= 0

  const handleSave = () => {
    onUpdate(coin.id, {
      currentValue: parseFloat(editData.currentValue),
      status: editData.status
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      currentValue: coin.currentValue,
      status: coin.status
    })
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{coin.name}</h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
              {coin.symbol}
            </span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
              coin.status === 'successful' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {coin.status}
            </span>
          </div>
          <p className="text-sm text-gray-600">Developer: <span className="font-medium text-gray-900">{coin.developer}</span></p>
        </div>
        
        <div className="flex items-center gap-2">
          {!isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Edit coin"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(coin.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Delete coin"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                aria-label="Save changes"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Cancel editing"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Current Value ($)</label>
            <input
              type="number"
              value={editData.currentValue}
              onChange={(e) => setEditData(prev => ({ ...prev, currentValue: e.target.value }))}
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
            <select
              value={editData.status}
              onChange={(e) => setEditData(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="successful">Successful</option>
              <option value="unsuccessful">Unsuccessful</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Investment</p>
            <p className="text-sm font-semibold text-gray-900">${coin.investmentAmount.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Current Value</p>
            <p className="text-sm font-semibold text-gray-900">${coin.currentValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Profit/Loss</p>
            <p className={`text-sm font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
              {isProfit ? '+' : ''}{profitLoss >= 0 ? '$' : '-$'}{Math.abs(profitLoss).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Return</p>
            <p className={`text-sm font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
              {isProfit ? '+' : ''}{profitLossPercentage}%
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CoinCard