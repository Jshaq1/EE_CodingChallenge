import './App.css';
import './Css/App.scss'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MyProducts, ProductDetail, ProductsList, Loader, Aside, Navbar } from './barrelExport';
import axios from 'axios';
import { GlobalProvider } from './Context/MyProductsContext';
import ErrorLoading from './Components/Utilities/ErrorLoading';



const App = () => {
  const [APIData, setAPIData] = useState()
  const [isLoading, setIsloading] = useState(true)
  const [apiError, setApiError] = useState(false)

  const location = useLocation();
  const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'

  }


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const data = res.data
        setAPIData(data)
      })
      .catch(err => {
        console.log(err)
        setApiError(true)
      })
      .then(() => {
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
      }
      )
  }, [])

  const sortProducts = (sortParam) => {
    const APIDataCopy = [...APIData]

    if (sortParam === 'title' || sortParam === 'category') {
      APIDataCopy.sort((a, b) => a[sortParam].localeCompare(b[sortParam]))
    } else {

      APIDataCopy.sort((a, b) => a[sortParam] - b[sortParam])
    }

    setAPIData(APIDataCopy)
  };


  return (
    isLoading ? <Loader /> :
      <GlobalProvider>
        <Navbar />
        <div className='body-container' style={location.pathname !== '/' ? bodyStyle : {}}>
          {location.pathname === '/' && <Aside sortProducts={sortProducts} />}
          <Routes>
            <Route path='/' element={apiError ? <ErrorLoading message={'There was an error loading please refresh'} /> : <ProductsList productsData={APIData} />} />
            <Route path='/my-products' element={<MyProducts />} />
            <Route path='/product/:id' element={<ProductDetail productsData={APIData} />} />
          </Routes>
        </div>
      </GlobalProvider>
  );
}

export default App;
