'use client';

import { useState } from 'react';
import PasswordUpdateClient from './PasswordUpdateClient';

export default function ProfileClient({ user }: { user: { name: string; email: string } }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    const res = await fetch('/api/account/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setMessage('Profile updated successfully!');
    } else {
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-start p-4">
        <div className="mb-4 mt-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
        {message && <p>{message}</p>}
      </div>
      <PasswordUpdateClient />
    </div>
  );
}
