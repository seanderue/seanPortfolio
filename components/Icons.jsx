import React, {useState} from 'react'
import Link from 'next/link'

export default function Icons() {
    
    const [hovered, setHovered] = useState(false)
    
    const handleMouseOver = () => {
        setHovered((prevState) => !prevState)
    }

    return (
    <div className='icon_container'>
        <a href='https://www.linkedin.com/in/sean-derue/'>
            <div className="linkedin-circled"></div>
        </a>
        <a href='https://github.com/seanderue/seanderue'>
            <div className="github-circled"></div>
        </a>
        <a href="mailto:seanderue@gmail.com">

        <svg
            onMouseOver={handleMouseOver} 
            className="email-circled" 
            id="el4tr6MBb2g1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 1000 1000" 
            shape-rendering="geometricPrecision" 
            text-rendering="geometricPrecision">
                <g>
                    <path 
                        className='email-circled-path'
                        d="M500,10C229.4,10,10,229.3,10,500c0,270.6,219.4,490,490,490s490-219.5,490-490C990,229.3,770.7,10,500,10ZM219.3,310.3h12.1c179.7,0,359.4.1,539-.1c8.1,0,10.5,2,10.5,10.4-.1,119.8-.1,239.7,0,359.5c0,7.7-2.3,9.7-9.6,9.7-180.8-.3-361.7-.3-542.5-.1-6.3,0-9.6-.7-9.6-8.6.3-119.5.2-239,.1-358.6v-12.2v0ZM263.6,335c3.5,3.6,4.9,5.3,6.8,7c60.3,55.5,120.5,110.9,181,166.4c9.6,8.9,19.5,17.7,30.3,25.4c12.2,8.6,25.8,8.7,37.7-.7c12.6-9.7,24.4-20.3,36.1-31.1c57.6-52.6,115-105.4,172.4-158.3c2.5-2.2,4.5-4.9,7.7-8.8-157.9.1-313.7.1-472,.1v0Zm-.7,326.9c1,1.2,1.8,2.2,2.8,3.3h469c.7-.9,1.2-1.8,1.6-2.8-3.2-2.4-6.8-4.7-9.7-7.5-48.3-44.2-96.7-88.3-144.6-132.8-6.4-5.8-9.8-5-15.5.3-12.3,11.2-24.8,21.9-38,31.9-18.4,13.9-37.9,14.3-56.6.3-13.5-10.3-26.4-21.5-39.2-32.9-5.4-5-8.7-4.9-14.1.1-48.5,44.9-97.3,89.4-146,134.1-2.7,2.4-6.4,4.1-9.7,6v0ZM409,500c-54.4-49.8-107.8-99-162.7-149.2v298.7C301.4,598.8,354.7,549.9,409,500v0ZM754.3,353.9c-.9-.5-1.7-.9-2.5-1.4-53.3,49-106.4,98-160.5,147.5c54.5,50.1,107.8,99,162.9,149.6.1-100.4.1-198,.1-295.7v0Z" 
                        />
                </g>
        </svg>
                        </a>
    </div>     
  )
}
