import React from 'react'

const AboutUs = ({Content}) => {
    console.log(Content)
    return (
        <div className='mt-5'>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                About Us
            </h1>
            <p className='lg:w-1/2 mx-auto text-justify font-semibold'>
                Welcome to the <strong>Computer Department </strong> at <b>Kurigram Polytechnic Institute</b>, where innovation and education intersect. Our dynamic environment fosters a passion for computer science and emerging technologies. Join us on a journey of exploration and skill development in the ever-evolving world of computing
            </p>
            <h5 className='font-semibold text-center text-lg text-gray-500 pt-4'>We Have</h5>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://www.must.edu.mo/images/FI/computer-software_1.jpg"
                        alt="Card"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Software Lab 1</div>
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Computers :
                            </p>
                            <p className='font-bold'>{Content && Content[0].labonecomputer}</p>
                        </div>                       
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Capacity :
                            </p>
                            <p className='font-bold'>{Content && Content[0].laboneseat}</p>
                        </div>                       
                    </div>                   
                </div>
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://bauet.ac.bd/law/wp-content/uploads/sites/13/2020/11/Figure-5.8-Software-Engineering-Laboratory.jpg"
                        alt="Card"
                    />
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Software Lab 2</div>
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Computers :
                            </p>
                            <p className='font-bold'>{Content && Content[0].labtwocomputer}</p>
                        </div>                       
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Capacity :
                            </p>
                            <p className='font-bold'>{Content && Content[0].labtwoseat}</p>
                        </div>                       
                    </div>                     
                </div>
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://www.must.edu.mo/images/FI/computer-hardware-physical_1.jpg"
                        alt="Card"
                    />
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Hardware Lab</div>
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Computers :
                            </p>
                            <p className='font-bold'>{Content && Content[0].hlabcomputer}</p>
                        </div>                       
                        <div className='flex justify-between w-2/3'>
                            <p className="text-gray-600 text-base font-semibold">
                                Number of Capacity :
                            </p>
                            <p className='font-bold'>{Content && Content[0].hlabseat}</p>
                        </div>                       
                    </div>                     
                </div>
            </div>
        </div>
    )
}

export default AboutUs