import { Box } from "@mui/material";
import Carousel from "../carousel/Carousel";
import useWindowSize from "hooks/useWindowSize";
import React, { FC, useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard14 from "../product-cards/ProductCard14";
import { Paragraph } from "components/Typography";
import { styled, useTheme } from "@mui/system";

const SubTitle = styled(Paragraph)(({ theme }) => ({
  marginTop: "-20px",
  marginBottom: "20px",
  fontSize: 12,
  color: theme.palette.grey[600],
}));

interface Props {
  productsData: any[];
}
const HealthBeautySection3: FC<Props> = ({ productsData }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);

  const { palette } = useTheme();

  return (
    <CategorySectionCreator title="Top New Products" seeMoreLink="#">
      <SubTitle>Best deal with medical and beauty items</SubTitle>
      <Box mb={-0.5}>
        <Carousel
          totalSlides={productsData.length}
          visibleSlides={visibleSlides}
          infinite={true}
          sx={{
            "& #backArrowButton, #backForwardButton": {
              color: palette.primary.main,
              background: palette.primary[50],
              "&:hover": {
                background: palette.primary[100],
              },
            },
          }}
        >
          {productsData.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard14
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                price={item.price}
                off={item.discount}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default HealthBeautySection3;
