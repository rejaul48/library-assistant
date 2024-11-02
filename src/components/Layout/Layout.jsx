// Layout.jsx
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from './../Header/Header';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

const Layout = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (navigation.state === 'loading') {
      setIsLoading(true);

     
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);  
    } else {
       
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    }

   
    return () => clearTimeout(timer);
  }, [navigation.state]);

  return (
    <>
      <Header />
      {
        isLoading ? <Spinner /> : <Outlet />
      }
      <Footer />
    </>
  );
};

export default Layout;
