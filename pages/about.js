import { NextSeo } from 'next-seo';
import { Box } from 'reflexbox';

const About = () => {
  const SEO = {
    title: 'About page',
    description: 'Standard about page',
    openGraph: {
      title: 'About page',
      description: 'Standard about page',
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box className="content" as="h2" my={40}>
          About page
        </Box>
      </Box>
    </>
  );
};

export default About;
