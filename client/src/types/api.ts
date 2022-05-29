export interface iSpotifyImage {
  height: null | number
  width: null | number
  url: string
}

export interface iArtist {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface iCompleteArtist extends iArtist {
  followers: {
    href: null | string
  }
  genres: string[]
  images: iSpotifyImage[]
  popularity: number
}

export interface iTrack {
  album: {
    album_type: string
    artists: iArtist[]
    href: string
    id: string
    images: iSpotifyImage[]
    name: string
    release_date: string
    total_tracks: number
    type: string
    uri: string
  }
  artists: iArtist[]
  href: string
  id: string
  name: string
  popularity: number
  preview_url: string
  track_number: number
  uri: string
}

export interface iUser {
  country: string
  display_name: string
  email: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: null | string
    total: number
  }
  href: string
  id: string
  images: iSpotifyImage[]
  product: 'premium' | 'free' | 'open'
  type: string
  uri: string
  topArtists: {
    href: string
    items: iCompleteArtist[]
    limit: number
    next: null
    previous: null
    offset: number
    total: number
  }
  topTracks: {
    href: string
    items: iTrack[]
    limit: number
    next: null
    previous: null
    offset: number
    total: number
  }
}
