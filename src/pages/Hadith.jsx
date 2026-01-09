import { useState } from 'react'
import { BookMarked, ChevronDown, ChevronUp, Info } from 'lucide-react'
import { hadithCollection } from '../data/jesusData'

export default function Hadith() {
  const [expandedHadith, setExpandedHadith] = useState(null)

  const toggleHadith = (id) => {
    setExpandedHadith(expandedHadith === id ? null : id)
  }

  // Format topic for display
  const formatTopic = (topic) => {
    return topic
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Determine grade based on source (Bukhari and Muslim are Sahih)
  const getGrade = (source) => {
    if (source.includes('Bukhari') || source.includes('Muslim')) {
      return 'Sahih'
    }
    return 'Hasan'
  }

  const getGradeColor = (grade) => {
    switch (grade.toLowerCase()) {
      case 'sahih':
        return '#2e7d32'
      case 'hasan':
        return '#1976d2'
      default:
        return '#ed6c02'
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon">
          <BookMarked size={28} />
        </div>
        <h1>Hadith Collection</h1>
        <p className="arabic-title">أحاديث عن عيسى عليه السلام</p>
        <p>Prophetic traditions about Jesus (peace be upon him)</p>
      </div>

      <div className="info-box">
        <h4><Info size={18} /> About Hadith</h4>
        <p>
          Hadith are the recorded sayings and actions of Prophet Muhammad (PBUH).
          These narrations provide additional details about Prophet Isa that complement the Quranic account.
        </p>
      </div>

      {hadithCollection.map(hadith => {
        const grade = getGrade(hadith.source)
        return (
          <div key={hadith.id} className="expandable">
            <div
              className="expandable-header"
              onClick={() => toggleHadith(hadith.id)}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ margin: 0 }}>{formatTopic(hadith.topic)}</h3>
                  <span
                    className="badge"
                    style={{
                      background: getGradeColor(grade),
                      color: 'white',
                      fontSize: '0.7rem'
                    }}
                  >
                    {grade}
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {hadith.source} #{hadith.hadithNumber}
                </p>
              </div>
              {expandedHadith === hadith.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {expandedHadith === hadith.id && (
              <div className="expandable-content">
                {hadith.arabic && (
                  <div className="arabic-text" style={{
                    fontSize: '1.3rem',
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #f8f6f0, #fff)',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    {hadith.arabic}
                  </div>
                )}

                <p style={{
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'var(--surface-hover)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--primary-color)'
                }}>
                  {hadith.translation}
                </p>

                {hadith.narrator && (
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.75rem',
                    fontStyle: 'italic'
                  }}>
                    Narrated by: {hadith.narrator}
                  </p>
                )}

                {hadith.themes && hadith.themes.length > 0 && (
                  <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {hadith.themes.map((theme, idx) => (
                      <span key={idx} className="badge badge-secondary" style={{ fontSize: '0.75rem' }}>
                        {theme}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Hadith Grading</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge" style={{ background: '#2e7d32', color: 'white' }}>Sahih</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Authentic - highest grade of authenticity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge" style={{ background: '#1976d2', color: 'white' }}>Hasan</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Good - reliable narration</span>
          </div>
        </div>
      </div>
    </div>
  )
}
