import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default App;
