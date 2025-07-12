import GamePage from '@/components/GamePage'
import { Provider } from '@/lib/configContext'
import { DataFeatureCollection } from '@/lib/types'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Rubik } from 'next/font/google'
import 'react-circular-progressbar/dist/styles.css'
import config from './config'
import data from './data/features.json'

const font = Rubik({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-sans',
})

const fc = {
  ...data,
  features: data.features.filter((f) => !!config.LINES[f.properties.line]),
} as DataFeatureCollection

export const metadata = config.METADATA

export default function Warszawa() {
  return (
    <Provider value={config}>
      <main className={`${font.className} min-h-screen`}>
        <GamePage fc={fc} />
      </main>
    </Provider>
  )
}
