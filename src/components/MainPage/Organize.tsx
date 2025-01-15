import { Box, Button } from '@mui/material';
import React from 'react';

function Organize() {
  return (
    <>
      <div
        className="w-full mt-32 mx-auto h-[500px] rounded-lg shadow-lg"
        style={{
          background: 'linear-gradient(to left, black 80%, #3397AD 110%)',
        }}
      >
        {/* <div className="absolute inset-0 opacity-60"></div> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <video
            className="w-[700px] relative"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/organize.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-[40px] text-center font-bold absolute top-64">
            Professional Jewish Cemetery Cleaning <br/> Services
          </h2>
          <Button
            variant="contained"
            className="mt-28 bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200"
          >
            Organize service
          </Button>
        </div>
      </div>
    </>
  );
}

export default Organize;
