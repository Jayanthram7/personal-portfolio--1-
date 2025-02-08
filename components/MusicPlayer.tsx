"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlayCircle, PauseCircle, SkipForward, SkipBack, Search } from "lucide-react"

// Note: You'll need to replace 'YOUR_CLIENT_ID' with your actual Spotify Client ID
const CLIENT_ID = "YOUR_CLIENT_ID"
const REDIRECT_URI = "http://localhost:3000" // Update this to your actual redirect URI

interface Track {
  id: string
  name: string
  artists: { name: string }[]
  album: { images: { url: string }[] }
}

export function MusicPlayer() {
  const [player, setPlayer] = useState<Spotify.Player | null>(null)
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Track[]>([])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://sdk.scdn.co/spotify-player.js"
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Jayanth Studios Web Player",
        getOAuthToken: (cb) => {
          cb(getAccessToken())
        },
      })

      setPlayer(player)

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id)
      })

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id)
      })

      player.addListener("player_state_changed", (state) => {
        if (!state) return
        setCurrentTrack(state.track_window.current_track)
        setIsPaused(state.paused)
      })

      player.connect()
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const getAccessToken = () => {
    // Implement your token retrieval logic here
    // This could involve redirecting to Spotify for authentication
    // and then retrieving the token from the redirect URL
    return "YOUR_ACCESS_TOKEN"
  }

  const handlePlay = () => {
    player?.togglePlay()
  }

  const handlePrevious = () => {
    player?.previousTrack()
  }

  const handleNext = () => {
    player?.nextTrack()
  }

  const handleSearch = async () => {
    const accessToken = getAccessToken()
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=5`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await response.json()
    setSearchResults(data.tracks.items)
  }

  const handleTrackSelect = (track: Track) => {
    if (player) {
      player.play({
        uris: [`spotify:track:${track.id}`],
      })
    }
  }

  return (
    <div className="w-full max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Input
          type="text"
          placeholder="Search for a song..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={handleSearch} size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {searchResults.length > 0 && (
        <ul className="mb-4 max-h-24 overflow-y-auto">
          {searchResults.map((track) => (
            <li
              key={track.id}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2"
              onClick={() => handleTrackSelect(track)}
            >
              {track.name} - {track.artists[0].name}
            </li>
          ))}
        </ul>
      )}
      {currentTrack && (
        <div className="flex items-center">
          <img
            src={currentTrack.album.images[0].url || "/placeholder.svg"}
            alt={currentTrack.name}
            className="w-16 h-16 mr-4 rounded"
          />
          <div className="flex-grow">
            <p className="font-semibold">{currentTrack.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentTrack.artists[0].name}</p>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center mt-4">
        <Button onClick={handlePrevious} size="icon" variant="ghost">
          <SkipBack className="h-6 w-6" />
        </Button>
        <Button onClick={handlePlay} size="icon" variant="ghost">
          {isPaused ? <PlayCircle className="h-8 w-8" /> : <PauseCircle className="h-8 w-8" />}
        </Button>
        <Button onClick={handleNext} size="icon" variant="ghost">
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

