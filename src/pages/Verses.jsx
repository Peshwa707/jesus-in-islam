import { useState, useRef } from 'react'
import { BookOpen, Play, Pause, Volume2 } from 'lucide-react'
import { quranicVerses, getVerseAudioUrl } from '../data/jesusData'

export default function Verses() {
  const [selectedTheme, setSelectedTheme] = useState('all')
  const [playingId, setPlayingId] = useState(null)
  const audioRef = useRef(null)

  const themes = [
    { id: 'all', label: 'All Verses' },
    { id: 'birth', label: 'Birth' },
    { id: 'miracles', label: 'Miracles' },
    { id: 'prophethood', label: 'Prophethood' },
    { id: 'nature', label: 'Nature' },
    { id: 'mission', label: 'Mission' }
  ]

  const filteredVerses = selectedTheme === 'all'
    ? quranicVerses
    : quranicVerses.filter(v => v.theme === selectedTheme)

  const playAudio = (verse) => {
    if (playingId === verse.id) {
      audioRef.current?.pause()
      setPlayingId(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(getVerseAudioUrl(verse.audioId))
    audioRef.current = audio

    audio.play()
    setPlayingId(verse.id)

    audio.onended = () => {
      setPlayingId(null)
    }

    audio.onerror = () => {
      setPlayingId(null)
      console.error('Audio failed to load')
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon">
          <BookOpen size={28} />
        </div>
        <h1>Quranic Verses</h1>
        <p className="arabic-title">آيات قرآنية عن عيسى</p>
        <p>Verses about Prophet Isa (Jesus) with audio recitation</p>
      </div>

      <div className="tabs">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`tab ${selectedTheme === theme.id ? 'active' : ''}`}
            onClick={() => setSelectedTheme(theme.id)}
          >
            {theme.label}
          </button>
        ))}
      </div>

      <p style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Showing {filteredVerses.length} verses
      </p>

      {filteredVerses.map(verse => (
        <div key={verse.id} className="verse-card">
          <div className="verse-header">
            <span className="verse-ref">{verse.surah} {verse.ayah}</span>
            <button
              className={`play-btn ${playingId === verse.id ? 'playing' : ''}`}
              onClick={() => playAudio(verse)}
              title={playingId === verse.id ? 'Pause' : 'Play recitation'}
            >
              {playingId === verse.id ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>

          <div className="arabic-text">
            {verse.arabic}
          </div>

          <p className="transliteration">{verse.transliteration}</p>
          <p className="translation">{verse.translation}</p>

          <div style={{ marginTop: '0.75rem' }}>
            <span className="badge badge-secondary">{verse.theme}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
