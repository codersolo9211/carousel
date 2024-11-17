import { useState } from 'react'

import './App.css';
const images = [
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/19523/220-SM937509.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/19413/220-SM927578.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20045/300-SM985019.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/17330/220-SM764670.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18899/220-SM876462.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18567/220-SM839464.jpg",

]

function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide(){
    setCurrent(current === images.length-1 ? 0 : current +1 );
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length -1 : current -1);
  }

  return (
    <>
      <h2>Project 1: Carousel</h2>
      <div className='slider'>
        <div className='left-arrow' onClick={prevSlide}>
        ⬅
        </div>

        <div className='right-arrow' onClick={nextSlide}>
        ⮕
        </div>

        {images.map(
          (image,index) => current === index && (
            <div key={image} className='slide'>
              <img src={image} alt='images'/>
            </div>
          )
        )}
      </div>
      
      
    </>
  )
}

export default App
