import Hero from '@components/Hero';
import SectionAbout from '@components/SectionAbout';
import SectionImage from '@components/SectionImage';
import SectionReview from '@components/SectionReview';
// Define Container on Homepage
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/homepage-hero.jpg"
        imgAlt="satified woman eating in restaurant"
        title="Rollin"
        subtitle="Best Western &amp; Japanese Fusion Restaurant In Town"
      />

      <SectionAbout />

      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />

      <SectionReview />

      <SectionImage imgSrc="/sushi.jpg" imgAlt="fusion sushi" />

      {/* Define Container on Homepage */}
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}></Grid>
          <Grid container item justifyContent="center" xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
