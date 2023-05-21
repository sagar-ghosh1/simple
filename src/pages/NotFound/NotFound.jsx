import React from 'react';

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img src="/src/assets/notFound.jpg" alt="" />
               </div>
               <h1 className="text-5xl font-bold">Oops! <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found.</p>
               <button className="btn btn-primary">Back to Home</button>
            </div>
         </div>
      </div>
   );
};

export default NotFound;