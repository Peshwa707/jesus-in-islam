import { Heart, Star, BookOpen } from 'lucide-react'
import { maryamInfo, quranicVerses } from '../data/jesusData'

export default function Maryam() {
  // Get verses specifically about Maryam
  const maryamVerses = quranicVerses.filter(v =>
    v.translation.toLowerCase().includes('mary') ||
    v.surah.includes('Maryam') ||
    v.surah.includes('Al-Imran')
  ).slice(0, 5)

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #c9a227, #e0b93d)' }}>
          <Heart size={28} />
        </div>
        <h1>Maryam (Mary)</h1>
        <p className="arabic-title">مريم عليها السلام</p>
        <p>The blessed mother of Prophet Isa, honored in the Quran</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #fff8e1, #fffde7)' }}>
        <h4><Star size={18} /> Unique Honor</h4>
        <p>
          Maryam is the only woman mentioned by name in the Quran. An entire surah (Chapter 19)
          is named after her - Surah Maryam. She is mentioned 34 times in the Quran.
        </p>
      </div>

      <div className="card">
        <h3>Her Status in Islam</h3>
        <p style={{ marginBottom: '1rem' }}>{maryamInfo.status}</p>

        <div style={{
          padding: '1rem',
          background: 'var(--surface-hover)',
          borderRadius: 'var(--radius-sm)',
          marginTop: '1rem'
        }}>
          <p className="arabic-text" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
            {maryamInfo.quranicQuote.arabic}
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            "{maryamInfo.quranicQuote.translation}"
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            — {maryamInfo.quranicQuote.reference}
          </p>
        </div>
      </div>

      <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--primary-color)' }}>Her Virtues</h2>
      <div className="card">
        {maryamInfo.virtues.map((virtue, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: index < maryamInfo.virtues.length - 1 ? '1rem' : 0
          }}>
            <div style={{
              minWidth: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--secondary-color)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {index + 1}
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{virtue}</p>
          </div>
        ))}
      </div>

      <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--primary-color)' }}>
        <BookOpen size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Verses About Maryam
      </h2>

      {maryamVerses.map(verse => (
        <div key={verse.id} className="verse-card">
          <div className="verse-header">
            <span className="verse-ref">{verse.surah} {verse.ayah}</span>
          </div>
          <div className="arabic-text" style={{ fontSize: '1.4rem' }}>
            {verse.arabic}
          </div>
          <p className="translation">{verse.translation}</p>
        </div>
      ))}

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>The Annunciation</h3>
        <p style={{ marginBottom: '1rem' }}>
          {maryamInfo.annunciation}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          This story is beautifully narrated in Surah Maryam (19:16-35) and Surah Al-Imran (3:42-47).
        </p>
      </div>
    </div>
  )
}
