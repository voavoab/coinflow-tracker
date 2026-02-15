import React, { useState } from 'react'

function CoinForm({ onAddCoin }) {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    developer: '',
    investmentAmount: '',
    currentValue: '',
    status: 'successful'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.symbol || !formData.developer || !formData.investmentAmount) {
      alert('Please fill in all required fields')
      return
    }

    onAddCoin({
      ...formData,
      investmentAmount: parseFloat(formData.investmentAmount),
      currentValue: parseFloat(formData.currentValue) || 0,
      dateAdded: new Date().toISOString()
    })

    setFormData({
      name: '',
      symbol: '',
      developer: '',
      investmentAmount: '',
      currentValue: '',
      status: 'successful'
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Coin</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Coin Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Bitcoin"
          />
        </div>

        <div>
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">
            Symbol *
          </label>
          <input
            type="text"
            id="symbol"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="BTC"
          />
        </div>

        <div>
          <label htmlFor="developer" className="block text-sm font-medium text-gray-700 mb-1">
            Developer Name *
          </label>
          <input
            type="text"
            id="developer"
            name="developer"
            value={formData.developer}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Satoshi Nakamoto"
          />
        </div>

        <div>
          <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">
            Investment Amount ($) *
          </label>
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1000"
          />
        </div>

        <div>
          <label htmlFor="currentValue" className="block text-sm font-medium text-gray-700 mb-1">
            Current Value ($)
          </label>
          <input
            type="number"
            id="currentValue"
            name="currentValue"
            value={formData.currentValue}
            onChange={handleChange}
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1500"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status *
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="successful">Successful</option>
            <option value="unsuccessful">Unsuccessful</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Add Coin
        </button>
      </form>
    </div>
  )
}

export default CoinForm