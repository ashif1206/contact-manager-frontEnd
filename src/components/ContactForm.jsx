import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createContact} from '../redux/slice'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({ ...form, [name]:value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phoneNumber) {
      alert("Please fill all fields!");
      return;
    }
    dispatch(createContact({name:form.name,email:form.email,phoneNumber:form.phoneNumber}));
    setForm({ name: '', email: '', phoneNumber: '' });
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Add New Contact</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Creating...' : 'Create Contact'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
