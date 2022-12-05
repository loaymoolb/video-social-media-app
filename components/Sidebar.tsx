import React, { useState } from 'react';
// import { NextPage } from 'next';
// import { useRouter } from 'next/router';
import Link from 'next/link';
// import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';
import { MdOutlineCancel } from 'react-icons/md';

// import useAuthStore from '../store/authStore';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const userProfile = false;

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl"
      onClick={() => setShowSidebar((prev) => !prev)}
      >

        {showSidebar ? <MdOutlineCancel /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3  overflow-scroll">
          <div className="xl:border-b-2 border-gray-200 xl:pb-2">
            <Link href='/' >
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="capitalize text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar