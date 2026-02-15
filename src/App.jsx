import React, { useState, useEffect } from 'react'
import CoinForm from './components/CoinForm'
import CoinList from './components/CoinList'
import Stats from './components/Stats'

function App() {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('wallet-coins')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('wallet-coins', JSON.stringify(coins))
  }, [coins])

  const addCoin = (coin) => {
    setCoins(prev => [...prev, { ...coin, id: Date.now() }])
  }

  const deleteCoin = (id) => {
    setCoins(prev => prev.filter(coin => coin.id !== id))
  }

  const updateCoin = (id, updates) => {
    setCoins(prev => prev.map(coin => 
      coin.id === id ? { ...coin, ...updates } : coin
    ))
  }

  const successfulCoins = coins.filter(coin => coin.status === 'successful')
  const unsuccessfulCoins = coins.filter(coin => coin.status === 'unsuccessful')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet Tracker</h1>
          <p className="text-gray-600">Track your cryptocurrency investments and performance</p>
        </div>

        <Stats 
          successful={successfulCoins}
          unsuccessful={unsuccessfulCoins}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <CoinForm onAddCoin={addCoin} />
          </div>
          <div className="lg:col-span-2">
            <CoinList 
              coins={coins}
              onDelete={deleteCoin}
              onUpdate={updateCoin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App