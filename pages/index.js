import Hero from '@components/Hero';
import SectionAbout from '@components/SectionAbout';
import SectionImage from '@components/SectionImage';
import SectionReview from '@components/SectionReview';
// Define Container on Homepage
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NavigationCard from '@components/NavigationCard';

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
      {/* Add Navigation Card To Container */}
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./catering"
              ctaText="Find Out"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
