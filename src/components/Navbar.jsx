import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Contact Manager</h1>
      <div>
        <a href="#" className="mr-4 hover:underline">Home</a>
        <a href="#" className="hover:underline">Contacts</a>
      </div>
    </nav>
  )
}

export default Navbar