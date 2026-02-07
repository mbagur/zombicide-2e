import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-12 text-center tracking-wider">
        ZOMBICIDE
      </h1>
      <Link
        to="/survivors"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        View Survivors
      </Link>
    </div>
  )
}
