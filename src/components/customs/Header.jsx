import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <div className="flex items-center space-x-2"> {/* Parent div for logo and text */}
        <img src="/logo.svg" alt="Logo" />
        <div className="m-0 pl-5"> {/* Remove margins and paddings */}
          <h2 className='font-bold text-[25px]'>TraveLogic</h2>
        </div>
      </div>
      <div className=''>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header