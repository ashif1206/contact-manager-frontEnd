import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from './redux/slice'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  const { contact, loading, error } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <ContactForm />

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">All Contacts</h2>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {contact && contact.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {contact.map((data) => (
                <div key={data._id} className="bg-white shadow-md rounded-lg p-4 w-64 text-left">
                  <p><strong>Name:</strong> {data.name}</p>
                  <p><strong>Email:</strong> {data.email}</p>
                  <p><strong>Phone:</strong> {data.phoneNumber}</p>
                </div>
              ))}
            </div>
          ) : (
            !loading && <p>No contacts found.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
