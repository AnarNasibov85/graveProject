import { Box, Button } from '@mui/material';
import Header from '../components/Header';
import Image from 'next/image';
import Login from './login';

export default function Home() {
  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Box
        sx={{
          backgroundImage: "url('/bg-fond.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
          filter: 'blur(26px)',
          position: 'absolute',
          zIndex: 0, 
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, }}>
        <Header />
       
        <div className='mx-10'>  
        <Box>
          <h1 className='text-6xl font-semibold'>Professional Jewish Cemetery <br/> Cleaning Services –<br/>
          <span className='text-mainColor'><span className='italic'>Respect,</span> <span className='italic'>Care,</span>  and <span className=' italic'>Tradition</span></span></h1>
        </Box>
        <Box>
          <p className='text-gray text-base font-normal'>Dedicated to Honoring and Preserving Jewish Cemeteries with Exceptional <br/> Care, Respect for Tradition, and Professional Attention to Every Detail</p>
        </Box>
        <div className='flex gap-5'>
          <Button variant="contained" className=' rounded-full bg-mainColor py-4 px-7 w-72'>Organize service</Button>
          <Button variant="outlined" className=' rounded-full  py-4 px-7 text-black border-black'>Call us</Button>
        </div>
        <div className='mt-16 flex gap-16'>
          <Image src='/main1.svg' alt='main1' width={500} height={500} className='w-[530px] h-[216px]'/>
          <Image src='/main2.svg' alt='main2' width={400} height={400} className='w-[260px] h-[216px]'/>
          <Image src='/main1.svg' alt='main3' width={500} height={500} className='w-[530px] h-[216px]'/>
        </div>
        </div>

      </Box>
    </Box>
  );
}
