import React from 'react'

const Footer = () => {
  let footerStyle = {
    position:"relative",
    top:"70xvh",
    width:"100%",
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
    <p className='text-center'>
      Copyright &copy; My TodosList.com
    </p>
    </footer>
  )
}

export default Footer