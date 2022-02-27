import Image from 'next/image'
import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const items = [
  <div className="item" data-value="1">
    <Image
      src="/assets/images/img/image1.jpeg"
      width="350px"
      height="300px"
      className="sliderimg"
    />
  </div>,
  <div className="item" data-value="2">
    <Image
      src="/assets/images/img/image2.jpeg"
      width="350px"
      height="300px"
      className="sliderimg"
    />
  </div>,
  <div className="item" data-value="3">
    <Image
      src="/assets/images/img/image3.jpeg"
      width="350px"
      height="300px"
      className="sliderimg"
    />
  </div>,
  <div className="item" data-value="4">
    <Image
      src="/assets/images/img/image4.jpeg"
      width="350px"
      height="300px"
      className="sliderimg"
    />
  </div>,
  <div className="item" data-value="5">
    <Image
      src="/assets/images/img/image4.jpeg"
      width="350px"
      height="300px"
      className="sliderimg"
    />
  </div>,
]

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ))
}

const bid = () => {
  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]))

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = (e) => {
    setMainAnimation(false)

    if (e.type === 'action') {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
    }
  }

  const syncThumbs = (e) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  return [
    <AliceCarousel
      activeIndex={mainIndex}
      animationType="fadeout"
      animationDuration={800}
      disableDotsControls
      disableButtonsControls
      infinite
      items={items}
      mouseTracking={!thumbAnimation}
      onSlideChange={syncMainBeforeChange}
      onSlideChanged={syncMainAfterChange}
      touchTracking={!thumbAnimation}
    />,
    <div className="thumbs">
      <AliceCarousel
        activeIndex={thumbIndex}
        disableDotsControls
        disableButtonsControls
        items={thumbs}
        mouseTracking={false}
        onSlideChanged={syncThumbs}
        touchTracking={!mainAnimation}
      />
      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>,
  ]
}

export default bid
