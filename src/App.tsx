import { PageContent } from "./components/PageContent";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <div className="App">
      <PageContent />
      <ToastContainer />
    </div>
  )
}
