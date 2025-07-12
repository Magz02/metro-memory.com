import { Config, Line } from '@/lib/types'
import { MapboxOptions } from 'mapbox-gl'
import { Metadata } from 'next'

export const BEG_THRESHOLD = 0.5

export const LINES: {
  [name: string]: Line
} = {
  WarszawaMetroM1: {
    name: 'M1',
    color: '#0057B7',
    backgroundColor: '#002D5C',
    textColor: '#FFFFFF',
    order: 1000,
  },
  WarszawaMetroM2: {
    name: 'M2',
    color: '#C8102E',
    backgroundColor: '#7A0A1D',
    textColor: '#FFFFFF',
    order: 1000,
  },
}

export const METADATA: Metadata = {
  title: 'Memory Metra Warszawskiego',
  description: 'Ile stacji metra warszawskiego potrafisz wymienić z pamięci?',
  openGraph: {
    title: 'Memory Metra Warszawskiego',
    description: 'Ile stacji metra warszawskiego potrafisz wymienić z pamięci?',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://warszawa.metro-memory.com/',
  },
}

export const MAP_CONFIG: MapboxOptions = {
  container: 'map',
  style: 'mapbox://styles/benjamintd/clo7oftgy00y701pf3zfaf7un',
  bounds: [
    [20.865979, 52.097884],
    [21.240529, 52.39131],
  ],
  maxBounds: [
    [14.9, 46.9],
    [17.8, 49.5],
  ],
  minZoom: 6,
  fadeDuration: 50,
  dragRotate: false,
}

export const STRIPE_LINK = 'https://buy.stripe.com/cN2aFb0nI1rI9bi5km'

export const CITY_NAME = 'warszawa'

export const LOCALE = 'pl'

const config: Config = {
  GAUGE_COLORS: 'inverted',
  LOCALE,
  STRIPE_LINK,
  CITY_NAME,
  MAP_CONFIG,
  METADATA,
  LINES,
  BEG_THRESHOLD,
}

export default config
