
import './App.css';
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './Layout';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/*delays rendering your app's UI until your persisted state has been retrieved and saved to redux. */}
        <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App;
