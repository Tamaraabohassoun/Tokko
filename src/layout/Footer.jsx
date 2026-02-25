import { Link } from 'react-router-dom'
import { useState } from 'react'
import logoIcon from '../assets/images/imgi_1_694bb976afc509bfab820bb0_Logo Symbol.svg'
import { footerLinks, footerInfo } from '../data/footerData'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <footer className='py-12'>
      <div className='center-conatiner'>
        
        {/* القسم العلوي - Grid للروابط */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
          
          {/* Menu */}
          <div>
            <h3 className='text-text-primary font-semibold text-[0.9rem] mb-2'>{footerLinks.menu.title}</h3>
            <ul className='space-y-1'>
              {footerLinks.menu.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className='text-text-secondary text-[0.8rem] font-semibold hover:text-text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-text-primary font-semibold mb-2'>{footerLinks.support.title}</h3>
            <ul className='space-y-1'>
              {footerLinks.support.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className='text-text-secondary text-[0.8rem] font-semibold hover:text-text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className='text-text-primary font-semibold mb-2'>{footerLinks.follow.title}</h3>
            <ul className='space-y-1'>
              {footerLinks.follow.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text-secondary text-[0.8rem] font-semibold hover:text-text-primary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className='text-text-primary font-semibold mb-2'>{footerLinks.explore.title}</h3>
            <ul className='space-y-1'>
              {footerLinks.explore.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className='text-text-secondary text-[0.8rem] font-semibold hover:text-text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* القسم السفلي */}
        <div className='pt-8'>
          
          {/* Logo والوصف */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center  mb-8'>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex gap-3 items-center group cursor-pointer'
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className='bg-bg-purple-light rounded-full p-2 flex-shrink-0 transform transition duration-300 group-hover:rotate-180'>
                  <img 
                    src={logoIcon} 
                    alt="Logo" 
                    className='w-3.5! h-3.5! object-contain'
                  />
                </div>
                <h2 className='text-text-primary font-semibold text-xl transition-opacity duration-300 group-hover:opacity-50'>
                  {footerInfo.logo.name}
                </h2>
              </div>
              
              <p className='text-text-secondary font-medium text-[0.9rem] max-w-[260px]'>
                {footerInfo.logo.description}
              </p>
            </div>

            {/* Newsletter */}
            <div className='w-full md:w-auto'>
              <p className='text-text-black font-medium text-[1rem] my-2! mt-8!'>{footerInfo.newsletter.title}</p>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className='relative w-full md:w-80'>
                  <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={footerInfo.newsletter.placeholder}
                    className='w-full px-5 py-3.5 pr-28 rounded-full bg-text-white-secondary font-medium text-[0.8rem] focus:outline-none'
                    required
                    disabled={isSubmitting}
                  />
                  <button 
                    type='submit'
                    disabled={isSubmitting}
                    className='absolute right-1 top-1/2 -translate-y-1/2 bg-bg-dark text-text-white px-5 py-2.5 rounded-full hover:bg-dark-a6 transition-colors text-sm '
                  >
                    {isSubmitting ? 'Please wait...' : footerInfo.newsletter.buttonText}
                  </button>
                </form>
              ) : (
                <div className='w-full md:w-80 px-6 py-3 rounded-full bg-text-white-secondary flex items-center justify-center'>
                  <p className='text-text-primary font-medium text-[1rem]'>Thank you!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full h-[0.3px] bg-text-secondary opacity-30 my-7'></div>
        
        {/* Copyright والروابط السفلية */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-4 text-[0.8rem] font-medium text-text-secondary'>
          <p className='text-[1rem]'>{footerInfo.copyright}</p>
          <div className='flex gap-6'>
            {footerInfo.bottomLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className='hover:text-text-primary transition-colors text-[1rem]'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
