import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactUs() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{`My React App | Contact`}</title>
        </Helmet>
        <h1>Welcome to contact</h1>
      </>
    </HelmetProvider>
  );
}

export default ContactUs;
