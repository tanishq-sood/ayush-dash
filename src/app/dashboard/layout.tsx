"use client"

import { Inter } from "next/font/google";
import { signOut } from '@/lib/LoginHelper';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='min-h-screen flex flex-col'>
      {/* Navbar */}
      <nav className='navbar bg-[#49654e] px-[15px]'>
        <div className='navbar-start text-3xl'>
          AYUSH Aarambh
        </div>
      </nav>

      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside className='w-[250px] bg-[#8ba889] p-[15px] text-white min-h-full flex flex-col justify-between'>
          <ul>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>Home</li>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>Registration Form</li>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>E-Receipt Download</li>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>Track your application</li>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>Success Stories</li>
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>Locate your incubator   PARAMBH</li>
          </ul>

          <ul className="">
            <li className='p-[10px] hover:bg-[#49654e] cursor-pointer'>
              <a href='/profile'>Profile</a>
            </li>
            <li
              onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
              className='p-[10px] hover:bg-[#49654e] cursor-pointer'
            >
              <a>Sign Out</a>
            </li>
          </ul>
        </aside>




        {/* Main Content */}
        <main className='flex-1 p-[20px] bg-[#fff] text-[#000]'>
          {children}
        </main>
      </div>

      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="font-bold text-lg mb-4">Confirm Logout</h3>
          <p className="text-center mb-6">Are you sure you want to log out? You’ll need to log in again to access your account.</p>

          <div className="flex space-x-4">
            <button
              className="btn btn-error w-[100px] py-2 px-4 rounded-lg text-white bg-red-600 hover:bg-red-700"
              onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).close()}
            >
              Cancel
            </button>

            <form
              action={async () => {
                (document.getElementById('my_modal_2') as HTMLDialogElement).close();
                await signOut();
              }}
            >
              <button
                type="submit"
                className="btn btn-success w-[100px] py-2 px-4 rounded-lg text-white bg-green-600 hover:bg-green-700"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
      </body>
    </html>
  );
}
