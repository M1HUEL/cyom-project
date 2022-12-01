import Link from 'next/link'

import { IoMdReorder } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div>
            <Link
              href="/"
              className="px-2 py-2 font-black text-3xl rounded-md text-white"
            >
              Cyom
            </Link>
          </div>
          <nav className="nav">
            <ul className="flex flex-row items-center space-x-3">
              <li>
                <Link href="/metodology-spiral" className="nav-item">
                  Metodologia Espiral
                </Link>
              </li>
              <li>
                <Link href="/metodology-waterfall" className="nav-item">
                  Metodologia Cascada
                </Link>
              </li>
              <li>
                <Link href="/metodology-scrum" className="nav-item">
                  Metodologia Scrum
                </Link>
              </li>
              <IoMdReorder className="nav-icon" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
