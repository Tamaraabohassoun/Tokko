const EnrollButton = ({ text = 'Enroll Now', href = 'https://example.com/enroll', className = '' }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`bg-bg-dark text-text-white px-4 py-2 rounded-full duration-500 hover:bg-dark-a6 transition-colors text-base font-medium ${className}`}
    >
      {text}
    </a>
  )
}

export default EnrollButton
