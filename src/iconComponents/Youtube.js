import { useState } from 'react'

function SvgYoutube(props) {
  const [hover, setHover] = useState(false)
  return (
    <svg
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      xmlns='http://www.w3.org/2000/svg'
      width={21}
      height={20}
      {...props}>
      <defs>
        <linearGradient id='youtube_svg__a' x1='0%' x2='100%' y1='100%' y2='0%'>
          <stop offset='0%' stopColor='#D3205A' />
          <stop offset='100%' stopColor='#FF5A5A' />
        </linearGradient>
      </defs>
      <path
        fill={hover ? 'url(#youtube_svg__a)' : 'white'}
        d='M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z'
        transform='translate(-33)'
      />
    </svg>
  )
}

export default SvgYoutube
