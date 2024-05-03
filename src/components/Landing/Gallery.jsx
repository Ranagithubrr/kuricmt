import React from 'react'

const Gallery = ({ Content }) => {   
    return (
        <div>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Gallery
            </h1>
            <div class="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">                
                {
                    Content && Content[0].photos.map((ele) => {
                        return (
                            <img src={ele} alt="1" class="w-full rounded border-4" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery