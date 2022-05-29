import React from 'react';
import './App.css';
import { AppRouter } from './AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AppModal } from './Component/AppModal/AppModal';
import 'bootstrap/dist/css/bootstrap.min.css';


export const App: React.FC = () => {
  return (
    <RecoilRoot>

      <BrowserRouter>
        
          <AppRouter />
          
      </BrowserRouter>

      <AppModal />

    </RecoilRoot>
  );
}
