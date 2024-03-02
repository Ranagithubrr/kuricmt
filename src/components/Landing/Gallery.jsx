import React from 'react'

const Gallery = () => {
    return (
        <div>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Gallery
            </h1>
            <div className="w-full  p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                <img src="https://placekitten.com/400/300" alt="1" class="w-full rounded border-4" />
                <img src="https://placekitten.com/350/500" alt="4" class="w-full rounded border-4" />
                <img src="https://placekitten.com/500/350" alt="3" class="w-full rounded border-4" />
                <img src="https://placekitten.com/350/500" alt="5" class="w-full rounded border-4" />
                <img src="https://placekitten.com/300/400" alt="2" class="w-full rounded border-4" />
                <img src="https://placekitten.com/400/300" alt="1" class="w-full rounded border-4" />
                <img src="https://placekitten.com/350/500" alt="7" class="w-full rounded border-4" />
            </div>
        </div>
    )
}

export default Gallery