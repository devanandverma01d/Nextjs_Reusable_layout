import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <ul className="nav navigation">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/student">Student</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/teacher">Teacher</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/parent">Parent</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/principal">Principal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/accountant">Accountant</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/librarian">Librarian</Link>
          </li>
        </ul>
  )
}

export default Navigation