import { Box, Container } from '@mui/material'
import React, { ReactNode } from 'react'
import CategorySectionHeader from './CategorySectionHeader'

export interface CategorySectionCreatorProps {
  icon?: ReactNode
  title?: string
  seeMoreLink?: string
}

const CategorySectionCreator: React.FC<CategorySectionCreatorProps> = ({
  icon,
  seeMoreLink,
  title,
  children,
}) => {
  return (
    <Box mb={7.5}>
      <Container sx={{ pb: '1rem' }}>
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            icon={icon}
          />
        )}

        {children}
      </Container>
    </Box>
  )
}

export default CategorySectionCreator
