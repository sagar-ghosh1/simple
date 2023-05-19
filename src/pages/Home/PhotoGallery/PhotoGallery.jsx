import React from 'react';

const PhotoGallery = () => {
    return (
        <div>
            <div className="grid gap-4 grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                    {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div> */}
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img src="/src/assets/notFound.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default PhotoGallery;