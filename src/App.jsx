import React, { useState } from 'react'
import './App.css'

import sound from '/sound .mp3'

const App = () => {

 const[num, setNum] = useState(0)
 const [text, setText] = useState('')
 const [img, setImg] = useState(false)
 console.log(num)

 const minus = () => {
  if(num > 0) {
    setNum(num - 1)
  }
 }
 const plus = () => {
  if(num < 10) {
    setNum(num + 1)
  }
 }


 const openImgPlaySound = () => {
  setImg(!img)
  const audio = new Audio(sound)
  audio.play()
 }



  return (
    <>
    <div className="box">
      <h4>{num}</h4>
      <button onClick={plus}>Добавить число</button>
      <button onClick={minus}>Убавить число</button>
      {/* <button onClick={() => setNum(num * 2)}>Удвоить число</button> */}
      <button onClick={() => setNum(0)}>Обнулить число</button>
      
    </div>
    

    <div className="box">
<h4>{text}</h4>
<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>



    <div className="box">
      <button onClick={openImgPlaySound}>Нажми на меня</button>
      {img && <img onClick={() => setImg(false)} src='https://photobooth.cdn.sports.ru/preset/message/3/e6/aa0db289344b3b1a6b8604cd2043d.jpeg?f=webp&q=90&s=2x&w=730'/>}
    </div>
    </>
  )
}

export default App