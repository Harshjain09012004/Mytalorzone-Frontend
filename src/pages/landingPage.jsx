import React, { useContext, useEffect} from 'react';
import Header from '../components/common/header.jsx'
import Slider from '../components/common/imageSlider.jsx';
import Subfooter from '../components/common/subfooter.jsx';
import Footer from '../components/common/footer.jsx'
import { Triangle } from 'react-loader-spinner';
import { usercontext } from '../providers/userContext.jsx';
import { AllFaqs } from '../components/common/allFaqs.jsx';
import Product from '../components/common/product.jsx';
import BigProduct from '../components/common/bigProduct.jsx';

function Landing() {
  const {count,setcount} = useContext(usercontext);
  useEffect(()=>{
    setTimeout(()=>{
      setcount(count + 1);
    },1000)
  },[]);
  
  return (

    <div className='h-[100%] w-[100%] bg-zinc-50'>

      {count==0 && (
        <div className='h-[690px] w-[1500px] flex justify-center place-items-center'>
          <Triangle
          visible={true}
          height="180"
          width="180"
          color="#000000"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div>
      )}

      {count>0 && (
        <>
          <Header/>
          <Slider/>
          <div className='Products flex justify-evenly flex-wrap'>
            <BigProduct/>
            <BigProduct/>
            <BigProduct/>
            <BigProduct/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
          <AllFaqs/>
          <Subfooter/>
          <Footer/>
          <img src='src/assets/footer.png'/>
        </>
      )}

    </div>

  )
}

export default Landing