import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProDuct1() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        <div>
            <h3 className='ml-4 font-sans font-bold text-3xl'>Exclusive deals</h3>
        <div className=' mt-3 ml-5'>
            <Carousel className='' responsive={responsive}>
                <div className='h-full flex flex-col align-middle cursor-pointer'><img className='px-10 ml-6 w-10/12 h-2/3 p-2' src='https://rukminim1.flixcart.com/image/612/612/k48rwcw0/watch/d/z/y/gents-exclusive-3-designer-combo-rizzly-original-imaf5pu2gyaznhmc.jpeg?q=70' />
                    <div className='flex flex-col text-center'><p className='font-bold'>watches</p>
                        <p className='text-green-600'>Min 40% Off</p></div>
                </div>
                <div className='cursor-pointer h-full'><img className='px-10 h-2/3  w-full p-2' src='https://rukminim1.flixcart.com/image/612/612/l58iaa80/shirt/l/z/a/m-lmshsm3231-lee-original-imagfyef8qa9ztqt.jpeg?q=70' />
                    <div className='flex flex-col text-center'><p className='font-bold'> Clothing Accessories</p>
                        <p className='text-green-600'>Under ₹999 </p></div>
                </div>
                <div className=' cursor-pointer h-full'><img className='px-10 h-2/3 p-2' src='https://rukminim1.flixcart.com/image/612/612/km57hjk0/screen-guard/edge-to-edge-tempered-glass/e/c/q/f11pro-blk-ftg-hupshy-original-imagf4yep5qnygmw.jpeg?q=70' />
                    <div className='flex flex-col text-center'><p className='font-bold'>Tempered Glass</p>
                        <p className='text-green-600'>Min 40% Off</p></div>
                </div>
                <div className='cursor-pointer h-full'><img className='px-7 ml-9 h-2/3 p-2' src='https://rukminim1.flixcart.com/image/200/200/kw2fki80/kurta/q/a/6/xl-14663694-anouk-original-imag8tmkjysg5c2s.jpeg?q=70' />
                    <div className='flex flex-col text-center'>
                        <p className='font-bold'>Kurtis & More</p>
                        <p className='text-green-600'>From ₹299</p></div>
                </div>
                <div className='cursor-pointer h-full w-full'><img className='px-7 ml-6  h-2/3 p-3 ' src='https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/i/d/6/-original-imaghhtndrrbmupx.jpeg?q=70' />
                    <div className='flex flex-col text-center'><p className='font-bold'>Earbuds</p>
                        <p className='text-green-600'>Min 50% Off</p></div>


                </div>
                <div className='cursor-pointer h-full'><img className='px-7 ml-5 h-2/3' src='https://rukminim1.flixcart.com/image/612/612/xif0q/hand-messenger-bag/t/5/g/-original-imaggbwdkhvctd58.jpeg?q=70' />
                    <div className='flex flex-col text-center'>
                        <p className='font-bold'>Handbags</p>
                        <p className='text-green-600'>Under 599</p></div>
                </div>
                <div className='cursor-pointer h-full'><img className='px-7 ml-5 h-2/3' src='https://rukminim1.flixcart.com/image/200/200/kqy3rm80/kids-dress/u/d/e/5-6-years-s-49-amy-original-imag4untgegbyggz.jpeg?q=70' />
                    <div className='flex flex-col text-center'>
                        <p className='font-bold'>Kids Wear</p>
                        <p className='text-green-600'>From ₹299</p></div>
                </div>
                <div className='cursor-pointer h-full'><img className='  px-7 ml-5 h-2/3 ' src='https://rukminim1.flixcart.com/image/200/200/ku1k4280/washing-machine-new/r/t/x/mqsa60h5m-marq-by-flipkart-original-imag793fghyygmbg.jpeg?q=70' />
                    <div className='flex flex-col text-center'>
                        <p className='font-bold'>Homes</p>
                        <p className='text-green-600'>From ₹1,299</p></div>
                </div>
            </Carousel>
        </div>
        </div>
    )
}
