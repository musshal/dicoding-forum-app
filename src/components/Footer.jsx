import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed bottom-0 shadow-inner w-full flex justify-center gap-10 bg-white text-gray-600">
      <Link
        to="/threads"
        type="button"
        className="inline-flex flex-col p-2 items-center justify-center group"
      >
        <HiOutlineChatBubbleLeftRight size={25} />
        <span>Threads</span>
      </Link>
      <Link
        to="/leaderboards"
        type="button"
        className="inline-flex flex-col p-2 items-center justify-center group"
      >
        <MdOutlineLeaderboard size={25} />
        <span>Leaderboards</span>
      </Link>
      <Link
        to="/login"
        className="inline-flex flex-col p-2 items-center justify-center group"
      >
        <AiOutlineLogin size={25} />
        <span>Login</span>
      </Link>
    </footer>
  );
}

export default Footer;
