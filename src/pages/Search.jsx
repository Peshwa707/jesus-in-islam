import { useState, useMemo } from 'react'
import { Search as SearchIcon, BookOpen, BookMarked, Scroll, X } from 'lucide-react'
import { searchContent } from '../data/jesusData'

export default function Search() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const results = useMemo(() => {
    if (!query.trim()) return { verses: [], hadith: [], stories: [] }
    return searchContent(query)
  }, [query])

  const totalResults = results.verses.length + results.hadith.length + results.stories.length

  const filteredResults = useMemo(() => {
    if (activeFilter === 'all') return results
    if (activeFilter === 'verses') return { ...results, hadith: [], stories: [] }
    if (activeFilter === 'hadith') return { ...results, verses: [], stories: [] }
    if (activeFilter === 'stories') return { ...results, verses: [], hadith: [] }
    return results
  }, [results, activeFilter])

  const getFilteredCount = (type) => {
    if (type === 'all') return totalResults
    return results[type]?.length || 0
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon">
          <SearchIcon size={28} />
        </div>
        <h1>Search</h1>
        <p className="arabic-title">البحث</p>
        <p>Search across verses, hadith, and stories</p>
      </div>

      <div className="search-container">
        <SearchIcon className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for topics, verses, or keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      {query && (
        <>
          <div className="tabs" style={{ marginBottom: '1rem' }}>
            {[
              { id: 'all', label: 'All', icon: null },
              { id: 'verses', label: 'Verses', icon: BookOpen },
              { id: 'hadith', label: 'Hadith', icon: BookMarked },
              { id: 'stories', label: 'Stories', icon: Scroll }
            ].map(filter => (
              <button
                key={filter.id}
                className={`tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label} ({getFilteredCount(filter.id)})
              </button>
            ))}
          </div>

          <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
            Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
          </p>

          {filteredResults.verses.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: 'var(--primary-color)'
              }}>
                <BookOpen size={20} /> Quranic Verses
              </h3>
              {filteredResults.verses.map(verse => (
                <div key={verse.id} className="verse-card">
                  <div className="verse-header">
                    <span className="verse-ref">{verse.surah} {verse.ayah}</span>
                    <span className="badge badge-secondary">{verse.theme}</span>
                  </div>
                  <div className="arabic-text" style={{ fontSize: '1.4rem' }}>
                    {verse.arabic}
                  </div>
                  <p className="translation">{verse.translation}</p>
                </div>
              ))}
            </div>
          )}

          {filteredResults.hadith.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: 'var(--primary-color)'
              }}>
                <BookMarked size={20} /> Hadith
              </h3>
              {filteredResults.hadith.map(hadith => (
                <div key={hadith.id} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ margin: 0, color: 'var(--primary-color)' }}>{hadith.topic}</h4>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>{hadith.grade}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{hadith.text}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{hadith.source}</p>
                </div>
              ))}
            </div>
          )}

          {filteredResults.stories.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: 'var(--primary-color)'
              }}>
                <Scroll size={20} /> Stories
              </h3>
              {filteredResults.stories.map(story => (
                <div key={story.id} className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{story.title}</h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {story.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {totalResults === 0 && (
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <SearchIcon size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>No results found</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Try searching for different keywords like "miracle", "Mary", "birth", or "return"
              </p>
            </div>
          )}
        </>
      )}

      {!query && (
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <SearchIcon size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Start Searching</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Search across all content about Prophet Isa (Jesus) in Islam
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {['miracle', 'Mary', 'birth', 'return', 'prophet', 'messiah'].map(term => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-hover)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
