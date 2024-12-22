import React, { useState } from 'react'
import { MdCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Slider = () => {
    const [loc, setloc] = useState(0);
    let imageArray = ['src/assets/image1.jpeg','src/assets/image2.jpeg','src/assets/image3.jpeg','src/assets/image4.jpeg','src/assets/image5.jpeg'];

    // function change(){
    //     setTimeout(()=>{
    //         setloc((loc+1)%imageArray.length);
    //         change();
    //     },5000);
    // }
    // change();

    return (
        <div className='relative flex justify-evenly place-items-center mx-5 my-10'>
    
            <div className='absolute bottom-3 flex gap-3'>
                <MdCircle className={`Circle text-[16px] ${loc==0 ? 'text-gray-200':'text-gray-400'} text-gray-400 hover:scale-110 transition-all cursor-pointer`} onClick={()=>{setloc(0);}}/>

                <MdCircle className={`Circle text-[16px] ${loc==1 ? 'text-gray-200':'text-gray-400'} text-gray-400 hover:scale-110 transition-all cursor-pointer`} onClick={()=>{setloc(1);}}/>

                <MdCircle className={`Circle text-[16px] ${loc==2 ? 'text-gray-200':'text-gray-400'} text-gray-400 hover:scale-110 transition-all cursor-pointer`} onClick={()=>{setloc(2);}}/>

                <MdCircle className={`Circle text-[16px] ${loc==3 ? 'text-gray-200':'text-gray-400'} text-gray-400 hover:scale-110 transition-all cursor-pointer`} onClick={()=>{setloc(3);}}/>

                <MdCircle className={`Circle text-[16px] ${loc==4 ? 'text-gray-200':'text-gray-400'} text-gray-400 hover:scale-110 transition-all cursor-pointer`} onClick={()=>{setloc(4);}}/>
            </div>
            
            <Link to={'#'}>
                <img src={imageArray[loc]} className=' rounded-xl shadow-gray-400 shadow-lg transition-all cursor-pointer'/>
            </Link>
            

        </div>
    )
}

export default Slider;
