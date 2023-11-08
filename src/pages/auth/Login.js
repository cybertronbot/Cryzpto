import React from 'react';
;

function Login() {
  return (
    <div>
      <div className='w-full h-screen'>
        <div className='grid grid-cols-6'>
          <div className='col-span-2  h-[100vh]'>
            <h3 className='font-bold text-[28px] p-6 text-[#F7512E]'>CRYZPTO</h3>
          </div>
          <div className='col-span-4 relative h-screen'>
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black'>
          <video
            className='min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover'
            autoPlay
            loop
            muted
            type='video/mp4'
          >
            <source src='https://res.cloudinary.com/dd9uujnfm/video/upload/v1699467232/bg2_aubydk.mp4' />
          </video>
        </div>

            </div>
      
        </div>
      </div>
    </div>
  );
}

export default Login;
