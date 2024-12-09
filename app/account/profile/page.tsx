import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-2">Welcome, {session.user.name || 'User'}!</p>
      <p className="mt-2">Email: {session.user.email}</p>
    </div>
  );
  }

