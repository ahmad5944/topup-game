import '../styles/css/utilities.css'
import '../styles/css/homepage.css'
import '../styles/css/detail.css'
import '../styles/css/checkout.css'
import '../styles/css/complete-checkout.css'
import '../styles/css/sign-in.css'
import '../styles/css/sign-up.css'
import '../styles/css/sign-up-photo.css'
import '../styles/css/sign-up-photo-success.css'
import '../styles/css/404-not-found.css'
import '../styles/css/overview.css'
import '../styles/css/sidebar.css'
import '../styles/css/transactions.css'
import '../styles/css/transactions-detail.css'
import '../styles/css/edit-profile.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }): AppProps {
  return (
    <>
      <Head>
        {/* <!-- Bootstrap CSS --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />

        {/* <!-- Custom CSS --> */}
        <link rel="stylesheet" href="../styles/css/homepage.css" />
        <link rel="stylesheet" href="../styles/css/utilities.css" />

        {/* <!-- Google Font --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />

        {/* <!-- AOS Animation --> */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        {/* <!-- Bootstrap --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
