import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/images/imgi_1_694bb976afc509bfab820bb0_Logo Symbol.svg'
import EnrollButton from '../components/EnrollButton'

const navLinks = [
  { path: '/approach', label: 'Approach' },
  { path: '/instructor', label: 'Instructor' },
  { path: '/curriculum', label: 'Curriculum' },
  { path: '/pricing', label: 'Pricing' }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      {/* Desktop Header */}
      <div className='hidden md:flex center-conatiner gap-3 mx-auto justify-center items-center py-6'>
        <Link to="/" className='flex items-center justify-center bg-bg-purple-light rounded-full p-[8px] transform transition duration-300 hover:rotate-180'>
          
            <img 
              src={logoIcon} 
              alt="Logo" 
              className='h-5 w-5 object-contain'
            />
          
        </Link>

        <nav className='flex items-center gap-4 bg-gray-200 rounded-3xl px-6 py-2'>
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className='text-text-secondary hover:text-text-primary text-base'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <EnrollButton />
      </div>

      {/* Mobile Header - Fixed Icons */}
      <div className='md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6'>
        <Link to="/" className='flex items-center relative bg-bg-purple-light rounded-full p-3 transform transition duration-300 hover:rotate-180'>
          <img 
            src={logoIcon} 
            alt="Logo" 
            className='w-6! h-6! object-contain'
          />
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='bg-bg-dark rounded-full p-3 transition-all duration-300'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            // X Icon
            <svg className='w-6 h-6 text-white ' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            // Menu Icon
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bg-white transition-all duration-500 ease-in-out rounded-b-2xl border-r border-border-light ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ height: '65vh', zIndex: 40 }}
      >
        <div className='h-full flex flex-col justify-center items-center px-6! pt-20! pb-8!'>
          <nav className='bg-text-white-secondary rounded-3xl  py-8! mt-5 w-full mb-3'>
            <ul className='space-y-2 text-center'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className='text-text-secondary hover:text-text-primary text-lg transition-colors block'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <EnrollButton className='w-full text-center py-4!'/>
        </div>
      </div>
    </header>
  )
}

export default Header
