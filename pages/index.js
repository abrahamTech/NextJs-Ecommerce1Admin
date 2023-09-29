import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  //Auth "data:session" rename data to session
  const {data: session} = useSession();

  // if(!session) return;

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-700 gap-1 text-white rounded-lg overflow-hidden">
          <img src={session?.user?.image} className="w-6 h-6" alt="Profile picture"></img>
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  )
  
}
