import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProDuct() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='w-2/3 mt-3 ml-7 '>
      <Carousel className='z-0' responsive={responsive}>
          <div className='h-full flex flex-col -z-1  cursor-pointer'><img className=' px-10 ml-6 w-10/12 h-3/4' src='https://rukminim1.flixcart.com/image/200/200/ktlu9ow0/monitor/h/q/x/optix-g24c4-full-hd-optix-g24c4-msi-original-imag6wthhjgv7gf8.jpeg?q=70' />
          <div className='flex flex-col text-center'><p className='font-bold'>Curved Monitors</p>
          <p className='text-green-600'>Min 40% Off</p></div>
          </div>
          <div className='cursor-pointer h-full'><img className='px-10 h-3/4 mb-1 w-full p-2' src='https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/m/1/o/-original-imagkbyhyhgmgekr.jpeg?q=70'/>
          <div className='flex flex-col text-center'><p className='font-bold'>Sparx.Bata & More</p>
          <p className='text-green-600'>Under ₹999 </p></div>
          </div>
          <div className=' cursor-pointer h-full'><img className='px-10 h-3/4 mb-1' src='https://rukminim1.flixcart.com/image/200/200/k3rmm4w0/headphone/n/m/s/cosmic-byte-7-1-rgb-enc-gaming-original-imafmt6uzg8zjuum.jpeg?q=70'/>
          <div className='flex flex-col text-center'><p className='font-bold'>Gaming headphone</p>
          <p className='text-green-600'>Min 40% Off</p></div>
          </div>
          <div className='cursor-pointer'><img className='px-7 ml-5' src='https://rukminim1.flixcart.com/image/200/200/kz1lle80/smartwatch/m/f/q/-original-imagb54tb6fpurze.jpeg?q=70'/>
          <div className='flex flex-col text-center'>
            <p className='font-bold'>Smart Watches</p>
            <p className='text-green-600'>From ₹1,299</p></div>
          </div>
          <div className='cursor-pointer h-full'><img className='px-7 ml-6 h-3/4 mb-2' src='https://rukminim1.flixcart.com/image/200/200/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70'/>
          <div className='flex flex-col text-center'><p className='font-bold'>Premium Cameras</p>
          <p className='text-green-600'>Min 50% Off</p></div>
        
          </div>
      </Carousel>
    </div>
  )
}
