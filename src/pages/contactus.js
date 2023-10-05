import { Alert } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactUs() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{`My React App | Contact`}</title>
        </Helmet>
        <h1>Welcome to contact</h1>
        {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      </>
    </HelmetProvider>
  );
}

export default ContactUs;
