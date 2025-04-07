import { Outlet } from 'react-router-dom'; // ✅ Use Outlet instead of RouterProvider
import './App.css';
import Header from './component/header';

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className='container mx-auto w-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
