import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import ProfileClient from "@/app/components/ProfileClient";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { name: true, email: true },
  });
  
  if (!user) {
    return <div>User not found.</div>;
  }
  
  return <ProfileClient user={{ ...user, name: user.name ?? 'User' }} />;

}


// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import { useState } from "react";

// export default async function ProfilePage() {
//   const session = await getServerSession(authOptions);
//   const [name, setName] = useState(session?.user?.name || '');
//   const [email, setEmail] = useState(session?.user?.email || '');
//   const [message, setMessage] = useState('');
  
//   const handleUpdate = async () => {
//     const res = await fetch('/api/account/update', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email }),
//     });

//     if (res.ok) {
//       setMessage('Profile updated successfully!');
//     } else {
//       setMessage('Failed to update profile.');
//     }
//   };

//   if (!session) {
//     return <p>Please log in to view your profile.</p>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Profile</h1>
//       <p className="mt-2">Welcome, {session.user.name || 'User'}!</p>
//       <p className="mt-2">Email: {session.user.email}</p>

//       <h1>Update Profile</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <button onClick={handleUpdate}>Update</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

