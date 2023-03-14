import { HelmetProvider, Helmet } from "react-helmet-async";

function About() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{`My React App | About`}</title>
        </Helmet>
        <h1>Welcome to about</h1>
      </>
    </HelmetProvider>
  );
}

export default About;
