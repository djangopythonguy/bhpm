import { Container, Grid } from '@mui/material'
import React, { FC } from 'react'
import CategorySectionHeader from '../CategorySectionHeader'
import ProductCard1 from '../product-cards/ProductCard1'

interface Props {
  moreItems: any[]
}
const Section11: FC<Props> = ({ moreItems }) => {
  return (
    <Container sx={{ mb: '70px' }}>
      <CategorySectionHeader title="更多產品" seeMoreLink="#" />
      <Grid container spacing={3}>
        {moreItems.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 off={25} hoverEffect {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Section11
