import Head from "next/head";
import Script from "next/script"
import '../stylesheets/global.css'


// import { AuthContextProvider } from "../store/auth-context";
// import { LoanContextProvider } from "../store/loan-context";
import { motion } from 'framer-motion';




function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
  // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  //  bootstrap CDN
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;402&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Urbanist&display=swap" rel="stylesheet"/>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <Script
        src="https://kit.fontawesome.com/7dc12ecddc.js"
        crossorigin="anonymous" />

      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      {/* <Provider store={store}> */}
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{

        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
      {/* </Provider> */}



    </>
  )


}

export default MyApp
