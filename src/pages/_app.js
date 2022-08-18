

// import 'react-toastify/dist/ReactToastify.css';
// import "../assets/styles/globals.css";
// import { persistor, store, wrapper } from "../store/store";
// import { Provider } from "react-redux";
// import { ToastContainer } from 'react-toastify';
// import { PersistGate } from 'redux-persist/integration/react'

// function MyApp({ Component, pageProps }) { 
//   return (
//       <>
//         {/* <Provider store={store}>
//           <ToastContainer />
//           <Component {...pageProps} />
//         </Provider> */}
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <ToastContainer />
//             <Component {...pageProps} />
//           </PersistGate>
//         </Provider>
//       </>
//     );
// }

// export default MyApp;

import App from 'next/app';
import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../assets/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <>
      { process.browser ? (
            <PersistGate persistor={store.__persistor} loading={null}>
                <ToastContainer />
                <Component {...pageProps} />
            </PersistGate>
        ) : (
            <PersistGate persistor={store}>
              <ToastContainer />
              <Component {...pageProps} />
            </PersistGate>
         
        )
      }
    </>
    )
}

export default wrapper.withRedux(MyApp);