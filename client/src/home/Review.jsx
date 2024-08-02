import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import  Profpic from '../assets/prof1.png';
import  Profpic2 from '../assets/prof2.png';
import  Profpic3 from '../assets/prof3.png';
import  Profpic4 from '../assets/prof4.png';
import  Profpic5 from '../assets/prof5.png';
import  Profpic6 from '../assets/prof6.png';
import  Profpic7 from '../assets/prof7.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Avatar

import { Avatar } from 'flowbite-react';

// import  react icons

import {FaStar} from 'react-icons/fa6'

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Alina Su</h5>
                    <p className='text-base'>NovaXS Biotech Corp</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <div className='text-black'><FaStar/></div>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    I read this book as a read along. We read one story a day,
                    for 15 days. I usually read them in the mornings before work,
                    and it is something I plan on continuing with some of 
                    the other story collections on my shelf.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic2} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Dr Marko</h5>
                    <p className='text-base'>Paras HMRI</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    “I hardly give 5 stars to a book in my review.
                    I do not want the authors to reach a saturation point,
                    where they think they have done their best;
                    they can always go beyond what they have achieved so 
                    far - Keep growing.”
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                   <Avatar img={Profpic3} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Er cotlin</h5>
                    <p className='text-base'>Infosis</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <div className='text-black'><FaStar/></div>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    I think I'll give Irish fiction a break for a while ... 
                    Kennedy is a good writer (3 stars for that),
                    but these stories are so bleak. It took me a very long 
                    time to finish it, because I put it aside for weeks at a time.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic4} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Komal Singh</h5>
                    <p className='text-base'>Business</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <div className='text-black'><FaStar/></div>
                    <div className='text-black'><FaStar/></div>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    Stark realism, uneven collection. Some stories are memorable with
                    a grasping sense of Irish melancholy, but there were a few that 
                    left me cold. Still, worthwhile introduction to a new talent.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic5} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Sonali Agarwal</h5>
                    <p className='text-base'>Microsoft</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    Apparently all I like to read now are short story collections 
                    riddled with the melancholy of human existence. Same vibes as 
                    Everyone Dies Famous in a Small Town; I raced through it.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic6} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Ha-yoon</h5>
                    <p className='text-base'>Samsung</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <div className='text-black'><FaStar/></div>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    These stories are fantastic!!! It is hard to believe this is a debut collection.
                    It’s hard to put into words how incredible each story is, 
                    so my only advice is to read it as soon as you can.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-7'>
                  <Avatar img={Profpic7} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Himanshu Moriya</h5>
                    <p className='text-base'>Google</p>
                </div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    A wonderful collection of short stories, each one more than 
                    capable of standing on their own. I found them to be utterly magical, 
                    with a mystical quality that captivated me from the very beginning. 
                    </p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review