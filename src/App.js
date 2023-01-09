import React, { useState } from 'react'
import { Api } from './components/api'
import Accordion from './components/Accordion'
import './App.css'


export default function App() {
  const [data, setData] = useState(Api)
  const [str, setStr] = useState({})

  function changeBack1() {
    setStr({
      background: "url('https://w0.peakpx.com/wallpaper/539/552/HD-wallpaper-wooden-abstract-colorful-colors-design-triangles-wood-woods.jpg')"
    })
  }

  function changeBack2() {
    setStr({
      background: "url('https://images.template.net/wp-content/uploads/2016/02/03062858/Download-Background-Wood-Grain-Structure-for-Free.jpg')"
    })
  }
  function changeBack3() {
    setStr({
      background: "url('https://wallpaperaccess.com/full/3931222.jpg')"
    })
  }
  function changeBack4() {
    setStr({
      background: "url('https://cdn.wallpapersafari.com/75/76/NfD9sh.jpg')"
    })
  }

  return (
    <>
      <ul>
        <li> <img src="https://w0.peakpx.com/wallpaper/539/552/HD-wallpaper-wooden-abstract-colorful-colors-design-triangles-wood-woods.jpg" alt="woodbg" onClick={changeBack1} /></li>

        <li>  <img src="https://images.template.net/wp-content/uploads/2016/02/03062858/Download-Background-Wood-Grain-Structure-for-Free.jpg" alt="woodbg" onClick={changeBack2} /></li>
        <li>  <img src="https://wallpaperaccess.com/full/3931222.jpg" alt="woodbg" onClick={changeBack3} /></li>
        <li> <img src="https://cdn.wallpapersafari.com/75/76/NfD9sh.jpg" alt="woodbg" onClick={changeBack4} /></li>
      </ul>
      <div className='main' style={str} >

        <h1 className='head'>React Interview Questions <i class="fa-solid fa-person-circle-question" ></i></h1>
        <br /><br /><br /><br />

        {
          data.map((element) => {

            return (<>
              <Accordion {...element} />

            </>)
          })
        }

      </div>
      <h4 className='copyright'>© Developed by <a href="https://www.linkedin.com/in/rakesh-kumar-146238220/" target="_blank" rel="noreferrer">Rakesh kumar</a>.</h4>

    </>
  )
}