import { Provider } from "./components/ui/provider";
import { theme } from "./theme/theme";

export const App = ({ Component, pageProps }) => (
  <Provider theme={theme}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
