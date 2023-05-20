import React from 'react';

const MoreSection = () => {
    return (
        <div>
            <div>
                <h1 className='text-6xl font-medium mt-14 text-center'>Our Services</h1>
                <p className='mt-5 mb-6 text-center w-1/4 m-auto font-medium'>Our animal toys are not only visually appealing but also feature engaging features, such as sound effects, realistic movements, and interactive elements..</p>
            </div>
            <div className='flex items-center justify-center container mx-auto'>
                <div className='grid gap-6 grid-cole-1 lg:grid-cols-4'>
                    <div className='rounded-xl bg-base-200 shadow-2xl'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden '>
                                <img className='m-auto' src="/src/assets/removebg-preview.png" alt="" />
                                <h1 className='text-center text-2xl font-medium mb-6'>Pet Grooming</h1>
                                <p className='text-center font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-base-200 shadow-2xl'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden '>
                                <img className='m-auto' src="/src/assets/removebg-preview.png" alt="" />
                                <h1 className='text-center text-2xl font-medium mb-6'>Pet Grooming</h1>
                                <p className='text-center font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-base-200 shadow-2xl'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden '>
                                <img className='m-auto' src="/src/assets/removebg-preview.png" alt="" />
                                <h1 className='text-center text-2xl font-medium mb-6'>Pet Grooming</h1>
                                <p className='text-center font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl bg-base-200 shadow-2xl'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden '>
                                <img className='m-auto' src="/src/assets/removebg-preview.png" alt="" />
                                <h1 className='text-center text-2xl font-medium mb-6'>Pet Grooming</h1>
                                <p className='text-center font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MoreSection;