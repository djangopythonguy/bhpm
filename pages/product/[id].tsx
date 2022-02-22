import { Box, Tab, Tabs } from '@mui/material'
import { styled } from '@mui/material/styles'
import NavbarLayout from 'components/layout/NavbarLayout'
import AvailableShops from 'components/products/AvailableShops'
import FrequentlyBought from 'components/products/FrequentlyBought'
import ProductDescription from 'components/products/ProductDescription'
import ProductIntro from 'components/products/ProductIntro'
import ProductReview from 'components/products/ProductReview'
import RelatedProducts from 'components/products/RelatedProducts'
import { H2 } from 'components/Typography'
import bazarReactDatabase from 'data/bazar-react-database'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import {
  getFrequentlyBought,
  getRelatedProducts,
} from 'utils/api/related-products/products'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    fontWeight: 600,
    minHeight: 40,
    textTransform: 'capitalize',
  },
}))

interface Props {
  frequentlyBought: any[]
  relatedProducts: any[]
}
const ProductDetails: FC<Props> = (props) => {
  const { frequentlyBought, relatedProducts } = props

  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<object>()
  useEffect(() => {
    if (id) {
      const productData = bazarReactDatabase.find(
        (item) => item.id === parseInt(`${id}`)
      )
      setProduct(productData)
    }
  }, [id])

  const [selectedOption, setSelectedOption] = useState(0)
  const handleOptionClick = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedOption(newValue)
  }

  return (
    <NavbarLayout>
      {product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}

      <StyledTabs
        value={selectedOption}
        onChange={handleOptionClick}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription />}
        {selectedOption === 1 && <ProductReview />}
      </Box>

      <FrequentlyBought productsData={frequentlyBought} />

      <AvailableShops />

      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export async function getStaticProps() {
  const frequentlyBought = await getFrequentlyBought()
  const relatedProducts = await getRelatedProducts()

  return {
    props: {
      frequentlyBought,
      relatedProducts,
    },
  }
}

export default ProductDetails
