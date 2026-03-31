import React from 'react'

const EndMessage = () => {
  return (
    <div className='mt-10 border-t py-10 border-white/70 px-15 lg:px-0 container mx-auto flex flex-col md:flex-row gap-2  justify-between text-white/70'>
          <p className='mx-auto md:mx-0'>&copy;2026 Digitools. All rights Reserved</p>
          <ul className='flex flex-col md:flex-row gap-2 md:gap-5 mx-auto md:mr-0'>
              <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer">Terms of Services </li>
              <li className="hover:text-orange-500 cursor-pointer">Cookies</li>
          </ul>
    </div>
  )
}

export default EndMessage
