import React from 'react';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Footer({ authUser, logout }) {
  if (authUser === null) {
    return (
      <footer className="fixed bottom-0 border-t-2 w-full flex justify-center gap-10 bg-white text-gray-700 text-sm">
        <Link
          to="/threads"
          type="button"
          className="flex flex-col gap-1 p-2 items-center"
        >
          <HiOutlineChatBubbleLeftRight size={25} />
          <span>Threads</span>
        </Link>
        <Link
          to="/leaderboards"
          type="button"
          className="flex flex-col gap-1 p-2 items-center"
        >
          <MdOutlineLeaderboard size={25} />
          <span>Leaderboards</span>
        </Link>
        <Link
          to="/login"
          className="flex flex-col gap-1 p-2 items-center"
        >
          <AiOutlineLogin size={25} />
          <span>Login</span>
        </Link>
      </footer>
    );
  }

  return (
    <footer className="fixed bottom-0 border-t-2 w-full flex justify-center gap-10 bg-white text-gray-700 text-sm">
      <Link
        to="/threads"
        type="button"
        className="flex flex-col gap-1 p-2 items-center"
      >
        <HiOutlineChatBubbleLeftRight size={25} />
        <span>Threads</span>
      </Link>
      <Link
        to="/leaderboards"
        type="button"
        className="flex flex-col gap-1 p-2 items-center"
      >
        <MdOutlineLeaderboard size={25} />
        <span>Leaderboards</span>
      </Link>
      <button
        type="button"
        className="flex flex-col gap-1 p-2 items-center"
        onClick={() => logout()}
      >
        <AiOutlineLogout size={25} />
        <span>Logout</span>
      </button>
    </footer>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

Footer.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  logout: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  authUser: null,
};

export default Footer;
