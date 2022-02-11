import { Box } from '@mui/material';
import Image from 'next/image';

const SectionImage = ({ imgSrc, imgAlt }) => {
  return (
    <Box
      component="section"
      container
      sx={{
        position: 'relative',
        width: '100%',
        // You could adjust the height with "vh" to suit your use case.
        height: '60vh',
        overflow: 'hidden',
        zIndex: -100,
      }}
    >
      {/* De-structure the props, and add the Next image: */}
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      {/* Add The Filter Layer */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .2)',
        }}
      />
    </Box>
  );
};

export default SectionImage;
