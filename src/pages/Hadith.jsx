import { useState } from 'react'
import { BookMarked, ChevronDown, ChevronUp, Info } from 'lucide-react'
import { hadithCollection } from '../data/jesusData'

export default function Hadith() {
  const [expandedHadith, setExpandedHadith] = useState(null)

  const toggleHadith = (id) => {
    setExpandedHadith(expandedHadith === id ? null : id)
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

      {hadithCollection.map(hadith => (
        <div key={hadith.id} className="expandable">
          <div
            className="expandable-header"
            onClick={() => toggleHadith(hadith.id)}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ margin: 0 }}>{hadith.topic}</h3>
                <span
                  className="badge"
                  style={{
                    background: getGradeColor(hadith.grade),
                    color: 'white',
                    fontSize: '0.7rem'
                  }}
                >
                  {hadith.grade}
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {hadith.source}
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
                {hadith.text}
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

              {hadith.explanation && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#e3f2fd',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong>Explanation:</strong> {hadith.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

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
