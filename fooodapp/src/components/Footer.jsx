import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="  py-3 my-4 border-top text-align-center "  >
        <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '16px' }} >
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
          <span>Copyright © 2024 by Rushikesh Bhalkar. All rights reserved. </span>
        </div>

      </footer>
    </div>
  )
}

export default Footer