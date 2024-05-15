import React from 'react'

const Captains = () => {
  return (
    <div class="container mx-auto my-8 p-4">
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
                <tr class="hover:bg-gray-100">
                    <td class="px-4 py-2 border-b border-gray-300">John Doe</td>
                    <td class="px-4 py-2 border-b border-gray-300">johndoe@example.com</td>
                    <td class="px-4 py-2 border-b border-gray-300">123-456-7890</td>
                    <td class="px-4 py-2 border-b border-gray-300">Computer Science</td>
                    <td class="px-4 py-2 border-b border-gray-300">Morning</td>
                    <td class="px-4 py-2 border-b border-gray-300">5th</td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="px-4 py-2 border-b border-gray-300">Jane Smith</td>
                    <td class="px-4 py-2 border-b border-gray-300">janesmith@example.com</td>
                    <td class="px-4 py-2 border-b border-gray-300">234-567-8901</td>
                    <td class="px-4 py-2 border-b border-gray-300">Mechanical Engineering</td>
                    <td class="px-4 py-2 border-b border-gray-300">Evening</td>
                    <td class="px-4 py-2 border-b border-gray-300">6th</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Captains