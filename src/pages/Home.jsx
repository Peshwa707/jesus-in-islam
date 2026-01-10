import { Link } from 'react-router-dom'
import { BookOpen, Scroll, Heart, BookMarked, Clock, GitCompare, Star, Compass, BookText } from 'lucide-react'
import { namesOfIsa } from '../data/jesusData'

export default function Home() {
  // Combine primary name with titles for display
  const allNames = [
    { arabic: namesOfIsa.primary.arabic, english: namesOfIsa.primary.meaning },
    ...namesOfIsa.titles.map(t => ({ arabic: t.arabic, english: t.meaning }))
  ]

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon">
          <Star size={28} />
        </div>
        <h1>Jesus in Islam</h1>
        <p className="arabic-title">عيسى في الإسلام</p>
        <p>Discover the honored status of Prophet Isa (Jesus) in Islamic tradition</p>
      </div>

      <div className="info-box">
        <h4><Star size={18} /> Did You Know?</h4>
        <p>
          Jesus (Isa) is mentioned by name 25 times in the Quran - more than Prophet Muhammad (PBUH).
          He is one of the five greatest prophets (Ulul Azm) and holds a special place in Islam.
        </p>
      </div>

      <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Names & Titles of Isa</h2>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {allNames.map((name, index) => (
            <div key={index} className="badge badge-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <span className="arabic-name">{name.arabic}</span> - {name.english}
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Explore</h2>
      <div className="quick-actions">
        <Link to="/verses" className="quick-action">
          <div className="icon">
            <BookOpen size={24} />
          </div>
          <h3>Quranic Verses</h3>
          <p>30 verses about Isa</p>
        </Link>

        <Link to="/stories" className="quick-action">
          <div className="icon">
            <Scroll size={24} />
          </div>
          <h3>Stories of Isa</h3>
          <p>Birth, miracles & mission</p>
        </Link>

        <Link to="/maryam" className="quick-action">
          <div className="icon">
            <Heart size={24} />
          </div>
          <h3>Maryam (Mary)</h3>
          <p>The blessed mother</p>
        </Link>

        <Link to="/hadith" className="quick-action">
          <div className="icon">
            <BookMarked size={24} />
          </div>
          <h3>Hadith Collection</h3>
          <p>Prophetic traditions</p>
        </Link>

        <Link to="/second-coming" className="quick-action">
          <div className="icon">
            <Clock size={24} />
          </div>
          <h3>Second Coming</h3>
          <p>Return of Jesus</p>
        </Link>

        <Link to="/comparative" className="quick-action">
          <div className="icon">
            <GitCompare size={24} />
          </div>
          <h3>Comparative View</h3>
          <p>Islam vs Christianity</p>
        </Link>

        <Link to="/pagan-influences" className="quick-action">
          <div className="icon" style={{ background: 'linear-gradient(135deg, #7b1fa2, #9c27b0)' }}>
            <Compass size={24} />
          </div>
          <h3>Pagan Influences</h3>
          <p>Historical parallels</p>
        </Link>

        <Link to="/prophecies" className="quick-action">
          <div className="icon" style={{ background: 'linear-gradient(135deg, #0277bd, #039be5)' }}>
            <BookText size={24} />
          </div>
          <h3>Biblical Prophecies</h3>
          <p>Muhammad foretold</p>
        </Link>
      </div>

      <div className="card">
        <h3>Islamic Perspective</h3>
        <p style={{ marginBottom: '1rem' }}>
          In Islam, Jesus (Isa ibn Maryam) is revered as one of the mightiest messengers of Allah.
          He was born miraculously to the Virgin Mary (Maryam), performed miracles by Allah's permission,
          and was raised to heaven alive.
        </p>
        <p>
          Muslims believe Jesus will return before the Day of Judgment to restore justice and
          confirm his role as a prophet of Allah, not as divine.
        </p>
      </div>
    </div>
  )
}
