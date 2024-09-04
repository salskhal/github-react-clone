// import React from 'react';
// import { FaRegHeart } from 'react-icons/fa';
import Mona from '../assets/mona-love.png';

export default function SponsorCard() {
  return (
    <div className=" p-6  ">
      <div className=" rounded-lg p-4 flex flex-col items-start border border-[#30363d]">
        <div className="">
          <img src={Mona} alt="Mona" className="w-12 h-10" />
        </div>
        <div className="">
          <h2 className="text-white font-semibold">
            Sponsor open source projects you depend on
          </h2>
          <p className="text-[#8b949e] mt-1 text-sm">
            Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.
          </p>
          <a
            href="#"
            className="text-[#58a6ff] mt-2 inline-block hover:underline"
          >
            Explore sponsorable projects &rarr;
          </a>
        </div>
      </div>

      <div className="mt-4 rounded-lg px-4 py-2 flex flex-col items-start border border-[#30363d]">
        <p className="text-[#8b949e] text-sm">
          How can we improve search?{' '}
          <a href="#" className="text-[#58a6ff] hover:underline">
            Give feedback
          </a>
        </p>
      </div>

      <div className="mt-2">
        <p className="text-[#8b949e] text-xs">
          <span className="font-bold text-yellow-400">ProTip!</span> Press the{' '}
          <kbd className="bg-[#21262d] text-[#c9d1d9] px-1 py-0.5 rounded-md">
            /
          </kbd>{' '}
          key to activate the search input again and adjust your query.
        </p>
      </div>
    </div>
  );
}
