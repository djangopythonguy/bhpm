import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const styles = {
  productContainer: {
    '& .image-gallery-slide img': {
      borderRadius: '3px',
      maxWidth: '300px',
      height: 'auto',
      display: 'inline',
    },
    '& .image-gallery-swipe': {
      margin: '30px 0px',
      overflow: 'hidden',
      width: '100%',
      height: 'auto',
      textAlign: 'center',
    },
    '& .image-gallery-thumbnails > .image-gallery-thumbnails-container a': {
      '&.active > div': {
        opacity: '1',
        borderColor: '#DDDDDD',
      },
      '& > div': {
        width: '50%',
        maxWidth: '85px',
        margin: '0 auto',
        padding: '8px',
        display: 'inline',
        border: '1px solid transparent',
        background: 'transparent',
        borderRadius: '3px',
        opacity: '.8',
      },
      '& > div img': {
        borderRadius: '3px',
        width: '100%',
        height: 'auto',
        textAlign: 'center',
      },
    },
  },
}

const useStyles = makeStyles(styles)

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const bid2 = () => {
  return [
    <div className={[styles.productContainer]}>
      <Grid
        item
        xs={5}
        sm={5}
        Container
        direction={'row'}
        justifyContent={'left'}
        alignItems={'left'}
        rowSpacing={1}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        columns={12}
      >
        <Grid>
          <ImageGallery
            showFullscreenButton={true}
            showPlayButton={false}
            showIndex={true}
            startIndex={3}
            thumbnailPosition={'left'}
            items={images}
          ></ImageGallery>
        </Grid>
        <div>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8">
              <item>xs=8</item>
            </Box>
            <Box gridColumn="span 4">
              <item>xs=4</item>
            </Box>
            <Box gridColumn="span 4">
              <item>xs=4</item>
            </Box>
            <Box gridColumn="span 8">
              <item>xs=8</item>
            </Box>
          </Box>
        </div>
      </Grid>
    </div>,
  ]
}

const bid = () => {
  return [
    <div className={[styles.productContainer]}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <item>
            <ImageGallery
              showFullscreenButton={true}
              showPlayButton={false}
              showIndex={true}
              startIndex={3}
              thumbnailPosition={'left'}
              items={images}
            ></ImageGallery>
          </item>
        </Grid>
        <Grid item xs={5}>
          <item>hello</item>
        </Grid>
        <Grid item xs={4}>
          <item>xs=4</item>
        </Grid>
        <Grid item xs={8}>
          <item>xs=8</item>
        </Grid>
      </Grid>
    </div>,
  ]
}

const styles2 = {
  container: {
    width: 400,
    height: 300,
    margin: '5px auto',
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    fontWeight: 'bold',
    overflow: 'scroll',
  },
}

export default function Header() {
  const [showMe, setShowMe] = useState(false)
  function firstcall() {
    setShowMe(!showMe)
    var div = document.getElementById('msgbox1')
    div.innerHTML +=
      '<Button variant="outlined" color="success">Click me</Button><br />'
    var div = document.getElementById('msgbox1')
    div.scrollTop = div.scrollHeight - div.clientHeight
  }

  function secondcall() {
    setShowMe(!showMe)
    var div = document.getElementById('msgbox1')
    div.innerHTML += '<div style="color:blue">second call</div>'
    var div = document.getElementById('msgbox1')
    div.scrollTop = div.scrollHeight - div.clientHeight
  }

  function thirdcall() {
    setShowMe(!showMe)
    var div = document.getElementById('msgbox1')
    div.innerHTML += '<div style="color:blue">Here is some more data appended</div>'
    var div = document.getElementById('msgbox1')
    div.scrollTop = div.scrollHeight - div.clientHeight
  }

  function toggle() {
    setShowMe(!showMe)
    var div = document.getElementById('msgbox1')
    div.innerHTML += '<div style="color:blue">Here is some more data appended</div>'
    var div = document.getElementById('msgbox1')
    div.scrollTop = div.scrollHeight - div.clientHeight
  }
  return (
    <>
      {/*The bottom code should toggle on and off when the button is pressed*/}
      <div id="msgbox1" style={styles2.container}>
        <h2>Bid Start</h2>
      </div>

      <div className="App">
        <p className="App-intro">
          Type here to change name.
          <input id="bid_num" type="text" />
        </p>
      </div>
      <button onClick={firstcall}>First call</button>
      <Button
        variant="outlined"
        color="success"
        onClick={() => {
          firstcall()
        }}
      >
        Click me
      </Button>
      <button onClick={secondcall}>Second call</button>
      <button onClick={thirdcall}>Third call</button>
      <button onClick={toggle}>bid</button>
    </>
  )
}
