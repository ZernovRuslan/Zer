import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';

export default function App() {
  return (
    <>
      <Layout />
      <Toaster
        position='top-right'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 5000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#333',
            color: 'white',
          },
        }}
      />
    </>
  );
}
