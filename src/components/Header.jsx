import React from 'react'
import logo from '../../public/assets/images/Logomark.png'
import chev from '../../public/assets/images/chevron-down.png'

const Header = () => {
    return (
        <div className='container flex justify-between'>
            <div className=' flex gap-10'>
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <h1>Untitled UI</h1>
                </div>
                <div className='flex items-center gap-8'>
                    <a href="">
                        <div className=''>Home</div>
                    </a>
                    <a href="" className='flex'>
                        <div>Products</div>
                        <img src={chev} alt="" />
                    </a>
                    <a href="" className='flex'>
                        <div>Resources</div>
                        <img src={chev} alt="" />
                    </a>
                    <a href="">
                        <div>Pricing</div>
                    </a>
                </div>
            </div>
            <div className='flex items-center gap-8'>
                <div className='text-nowrap'>Log in</div>
                <button className='text-nowrap rounded-lg px-3 py-1 bg-purple-600 text-white'>Sign up</button>
            </div>
        </div>

    )
}

export default Header
