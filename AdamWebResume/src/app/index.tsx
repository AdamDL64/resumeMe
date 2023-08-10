import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// fonts
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

// Styles
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../assets/css/setup.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

// routes
import routes from './routes';

// UI Components
import Layout from '../components/Layout';
import Blog from '../pages/landing/sections/blog';

// -------------

/**
 * Making base name for the website (needed in deployment)
 */
const router = createBrowserRouter(routes, {
  basename: '/',
});

function App() {
  return (
    <div className="App">
      <Layout>
      <h1></h1>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
