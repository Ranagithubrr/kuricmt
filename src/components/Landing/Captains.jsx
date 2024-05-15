import React from 'react'

const Captains = ({ Captains }) => {
    console.log(Captains)
    return (
        <div class="container mx-auto my-8 p-4">
            {
                Captains && Captains.length !== 0 &&
                <>
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Class Captains</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                            <thead class="bg-gray-200">
                                <tr>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Name</th>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Email</th>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Phone</th>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Department</th>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Shift</th>
                                    <th class="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Captains && Captains.length !== 0 && Captains.map((ele,index) => {
                                        return (
                                            <tr class="hover:bg-gray-100">
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">{index+1}. {ele.name}</td>
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">{ele.email}</td>
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">{ele.phone}</td>
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">Computer</td>
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">{ele.shift}</td>
                                                <td class="px-4 py-2 border-b border-gray-300 whitespace-nowrap">{ele.semester}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </div>
    )
}

export default Captains