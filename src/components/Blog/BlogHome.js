import React from 'react'
import Footer from '../Footer/Footer'

import Slide from '../Slide/Slide'
import Card from './Card'
import CardTwo from './CardTwo'

function BlogHome() {
 const data =[
  {
    id:1,
    titleOne: "YOU CAN CHANGE THE WORLD",
    titletwo: "STRONG STYLE",
    paraOne: "How Women are Redirecting Hollywood",
    paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
    name: "By Jasmin Smith",
    subTitle: "How to Shop Mindfully",
    qrCode: "/Images/qrcode.png",
    cover: "/Images/cover.jpg",
  },
 ]


  return (
    <>
    
   <section className='home'>

<div class="left-content">
  {
    data.map((value)=>{
      return(
        <div className='content'>
        <div className='logo'>
<h1>V</h1>
        </div>
        <div className='home-img'><img src={value.cover} alt=''/>

        </div>
        <div className='text'>
          <h1>{value.titleOne}</h1>
          <p>{value.paraOne}</p>
          <span>{value.name}</span>

        </div>

        <div className='text text2'>
          <h1>{value.titletwo}</h1>
          <p>{value.paraTwo}</p>
          <span>{value.name}</span>

        </div>
        <div className='qrcode'>
       <img src={value.qrCode} alt="qr"/>
        </div>


           
        </div>
      )
      
    

    })
  
  }

</div>
   </section>
   <section className='right-content'>
<Slide/>
<Card/>
<CardTwo/>
<Footer/>

   </section>
   
    </>
  )
}

export default BlogHome