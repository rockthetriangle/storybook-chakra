// App
import Provider from "@/providers/ThemeProvider"

function App({ Component, pageProps }) {
  return (
    <Provider>
      	<Component {...pageProps} />
    </Provider>
  );
}

export default App;
