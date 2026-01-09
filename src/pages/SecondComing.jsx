import { Clock, AlertCircle, CheckCircle, MapPin } from 'lucide-react'
import { secondComingInfo, quranicVerses, hadithCollection } from '../data/jesusData'

export default function SecondComing() {
  // Get the Quranic verse about second coming (verse ID 27 - Az-Zukhruf 43:61)
  const secondComingVerse = quranicVerses.find(v => v.id === 27)

  // Get relevant hadith
  const relevantHadith = hadithCollection.filter(h => h.topic === 'second_coming').slice(0, 2)

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #5c6bc0, #7986cb)' }}>
          <Clock size={28} />
        </div>
        <h1>The Second Coming</h1>
        <p className="arabic-title">{secondComingInfo.arabicTitle}</p>
        <p>Islamic beliefs about the return of Prophet Isa before the Day of Judgment</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #e8eaf6, #f3e5f5)' }}>
        <h4><AlertCircle size={18} /> Important Belief</h4>
        <p>
          The return of Prophet Isa (Jesus) is one of the major signs of the Day of Judgment in Islam.
          This belief is established in both the Quran and authentic Hadith.
        </p>
      </div>

      <div className="card">
        <h3>Overview</h3>
        <p style={{ lineHeight: '1.8' }}>{secondComingInfo.description}</p>
      </div>

      <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--primary-color)' }}>
        <MapPin size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Key Beliefs About His Return
      </h2>

      <div className="card">
        {secondComingInfo.keyBeliefs.map((belief, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: index < secondComingInfo.keyBeliefs.length - 1 ? '1rem' : 0,
            paddingBottom: index < secondComingInfo.keyBeliefs.length - 1 ? '1rem' : 0,
            borderBottom: index < secondComingInfo.keyBeliefs.length - 1 ? '1px solid var(--border-color)' : 'none'
          }}>
            <div style={{
              minWidth: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--primary-color)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 'bold'
            }}>
              {index + 1}
            </div>
            <div>
              <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>
                {belief.title}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{belief.description}</p>
            </div>
          </div>
        ))}
      </div>

      {secondComingVerse && (
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <h3>Quranic Evidence</h3>
          <div style={{
            padding: '1rem',
            background: 'var(--surface-hover)',
            borderRadius: 'var(--radius-sm)',
            marginTop: '0.75rem'
          }}>
            <p className="arabic-text" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              {secondComingVerse.arabic}
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              "{secondComingVerse.translation}"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              — {secondComingVerse.surah} {secondComingVerse.ayah}
            </p>
          </div>
        </div>
      )}

      {relevantHadith.length > 0 && (
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3>Hadith Evidence</h3>
          {relevantHadith.map((hadith, index) => (
            <div key={hadith.id} style={{
              padding: '1rem',
              background: 'var(--surface-hover)',
              borderRadius: 'var(--radius-sm)',
              marginTop: '0.75rem',
              borderLeft: '3px solid var(--secondary-color)'
            }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                "{hadith.translation}"
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                — {hadith.source} ({hadith.narrator})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
