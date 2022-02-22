import FlexBox from 'components/FlexBox'
import LazyImage from 'components/LazyImage'
import { Typography } from '@mui/material'
import React from 'react'

export interface MobileCategoryImageBoxProps {
  title: string
  imgUrl?: string
  Icon?: any
}

const MobileCategoryImageBox: React.FC<MobileCategoryImageBoxProps> = ({
  title,
  imgUrl,
  Icon,
}) => {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      {imgUrl ? (
        <LazyImage
          src={imgUrl}
          borderRadius="5px"
          width={100}
          height={100}
          objectFit="cover"
        />
      ) : (
        Icon && <Icon size="48px">{Icon}</Icon>
      )}
      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt={1}
      >
        {title}
      </Typography>
    </FlexBox>
  )
}

export default MobileCategoryImageBox
