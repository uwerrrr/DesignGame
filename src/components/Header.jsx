import React from 'react'
import logo from '../../public/assets/images/Logomark.png'

export const Header = () => {
    return (
        <div className='container flex flex-row'>
            <div>
                <img src={logo} alt="" />
                <h1>Untitled UI</h1>
            </div>
            <div className='flex'>
                <a href="">
                    <div className='text-4xl'>Home</div>
                </a>
                <a href="">
                    <div>Products</div>
                </a>
                <a href="">
                    <div>Resources</div>
                </a>
                <a href="">
                    <div>Pricing</div>
                </a>
            </div>
            <div className='flex'>
                <div>Log in</div>
                <button>Sign up</button>
            </div>
        </div>
    )
}
