import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
      <div className="container flex sm:flex-row flex-col justify-center items-center gap-10 max-sm:flex-col !px-0 !py-10">
        <p className="caption text-n-4 lg:block text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
  );
};

export default Footer;
