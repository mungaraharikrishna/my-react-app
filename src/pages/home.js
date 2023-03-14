import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{`My React App | Home`}</title>
        </Helmet>
        <h1>Welcome to home</h1>
      </>
    </HelmetProvider>
  );
}

export default Home;
