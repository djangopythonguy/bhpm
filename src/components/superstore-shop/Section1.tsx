import { Box, Container } from '@mui/material'
import CarouselCard1 from 'components/carousel-cards/CarouselCard1'
import Carousel from 'components/carousel/Carousel'
import Navbar from 'components/navbar/Navbar'
import { NextPage } from 'next'
import { Fragment } from 'react'

interface Props {
  carouselData?: any[]
}
const Section1: NextPage<Props> = ({ carouselData }) => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor="white" mb={7.5}>
        <Container sx={{ py: '2rem' }}>
          <Carousel
            totalSlides={5}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={true}
            spacing="0px"
          >
            {carouselData &&
              carouselData.map((data, ind) => (
                <CarouselCard1 carousel={data} key={ind} />
              ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Section1
