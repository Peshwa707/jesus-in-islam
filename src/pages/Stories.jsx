import { useState } from 'react'
import { Scroll, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import { storiesOfIsa } from '../data/jesusData'

export default function Stories() {
  const [expandedStory, setExpandedStory] = useState(storiesOfIsa[0]?.id || null)

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon">
          <Scroll size={28} />
        </div>
        <h1>Stories of Isa</h1>
        <p className="arabic-title">قصص عيسى عليه السلام</p>
        <p>The miraculous life of Prophet Jesus as told in Islamic tradition</p>
      </div>

      <div className="info-box">
        <h4><BookOpen size={18} /> About These Stories</h4>
        <p>
          These narratives are derived from the Quran and authentic Islamic sources.
          They highlight the miraculous nature of Prophet Isa's life and his special status among the prophets.
        </p>
      </div>

      {storiesOfIsa.map(story => (
        <div key={story.id} className="expandable">
          <div
            className="expandable-header"
            onClick={() => toggleStory(story.id)}
          >
            <div>
              <h3>{story.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                {story.arabicTitle}
              </p>
            </div>
            {expandedStory === story.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {expandedStory === story.id && (
            <div className="expandable-content">
              <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                {story.content}
              </p>

              {story.quranicReference && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'var(--surface-hover)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--secondary-color)'
                }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <strong>Quranic Reference:</strong> {story.quranicReference}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>The Significance</h3>
        <p>
          Prophet Isa (Jesus) is one of the Ulul Azm (Prophets of Strong Will), along with Nuh (Noah),
          Ibrahim (Abraham), Musa (Moses), and Muhammad (peace be upon them all). His story teaches
          us about faith, miracles by Allah's permission, and steadfastness in conveying the message of monotheism.
        </p>
      </div>
    </div>
  )
}
