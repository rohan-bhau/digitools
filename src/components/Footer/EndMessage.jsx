import React from 'react'

const EndMessage = () => {
  return (
    <div className='mt-10 border-t py-10 border-white/70 text-white container mx-auto flex justify-between text-white/70'>
          <p>&copy;2026 Digitools. All rights Reserved</p>
          <ul className='flex gap-5'>
              <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer">Terms of Services </li>
              <li className="hover:text-orange-500 cursor-pointer">Cookies</li>
          </ul>
    </div>
  )
}

export default EndMessage
