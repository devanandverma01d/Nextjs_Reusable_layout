import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <ul className="nav navigation">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home (app router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/student">Student (app router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/teacher">Teacher (app router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/parent">Parent (app router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/principal">Principal (page router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/accountant">Accountant (page router)</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/librarian">Librarian (page router)</Link>
          </li>
        </ul>
  )
}

export default Navigation