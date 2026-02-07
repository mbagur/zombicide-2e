import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Papa from 'papaparse'

interface Survivor {
  Name: string
  HP: string
  Blue: string
  Yellow: string
  Orange1: string
  Orange2: string
  Red1: string
  Red2: string
  Red3: string
  Role: string
  Description: string
  Collection: string
}

export default function Survivors() {
  const [survivors, setSurvivors] = useState<Survivor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/zombicide_survivors.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse<Survivor>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setSurvivors(results.data)
            setLoading(false)
          }
        })
      })
      .catch(error => {
        console.error('Error loading survivors:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-2xl">Loading survivors...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
          Survivors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {survivors.map((survivor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-red-500">{survivor.Name}</h2>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  HP: {survivor.HP}
                </span>
              </div>

              {survivor.Role && (
                <p className="text-yellow-400 font-semibold mb-2">{survivor.Role}</p>
              )}

              {survivor.Collection && (
                <p className="text-gray-400 text-sm mb-3">
                  Collection: {survivor.Collection}
                </p>
              )}

              {survivor.Description && (
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {survivor.Description}
                </p>
              )}

              <div className="mt-4 pt-4 border-t border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Skills:</h3>
                <div className="space-y-1 text-xs">
                  {survivor.Blue && (
                    <div className="flex items-start">
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Blue
                      </span>
                      <span className="text-gray-300">{survivor.Blue}</span>
                    </div>
                  )}
                  {survivor.Yellow && (
                    <div className="flex items-start">
                      <span className="bg-yellow-500 text-black px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Yellow
                      </span>
                      <span className="text-gray-300">{survivor.Yellow}</span>
                    </div>
                  )}
                  {survivor.Orange1 && (
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Orange 1
                      </span>
                      <span className="text-gray-300">{survivor.Orange1}</span>
                    </div>
                  )}
                  {survivor.Orange2 && (
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Orange 2
                      </span>
                      <span className="text-gray-300">{survivor.Orange2}</span>
                    </div>
                  )}
                  {survivor.Red1 && (
                    <div className="flex items-start">
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Red 1
                      </span>
                      <span className="text-gray-300">{survivor.Red1}</span>
                    </div>
                  )}
                  {survivor.Red2 && (
                    <div className="flex items-start">
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Red 2
                      </span>
                      <span className="text-gray-300">{survivor.Red2}</span>
                    </div>
                  )}
                  {survivor.Red3 && (
                    <div className="flex items-start">
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded mr-2 min-w-[60px] text-center">
                        Red 3
                      </span>
                      <span className="text-gray-300">{survivor.Red3}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
