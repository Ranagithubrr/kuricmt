import React from 'react';
import LazyLoad from 'react-lazyload';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Link } from 'react-router-dom';

const Gallery = ({ Content }) => {
    return (
        <div>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Gallery
            </h1>
            <div class="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {Content && Content[0].photos.map((photo, index) => (
                        <a href={photo} className='mt-2'>
                            <img src={photo} alt="Imagedfdf" className="w-full rounded border-4 cursor-pointer" onLoad={() => console.log('Image loaded')} />
                        </a>
                    ))}
                </LightGallery>
            </div>
        </div>
    )
}

export default Gallery