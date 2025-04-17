import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <nav className="h-16 border-b flex items-center container mx-auto px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <span className="font-nosifer text-2xl from-red-400 via-red-500 to-red-600 bg-gradient-to-r text-transparent bg-clip-text">
            GenX AI
          </span>
        </Link>
      </div>

      <div className="flex flex-rowitems-center space-x-4 text-neutral-400">
        <a href="https://github.com/behalnihal/genx-ai">
          <FaGithub size={24} className="hover:text-neutral-200" />
        </a>
        <a href="https://twitter.com/behalnihal">
          <FaTwitter size={24} className="hover:text-neutral-200" />
        </a>
        <a href="https://www.linkedin.com/in/behalnihal/">
          <FaLinkedin size={24} className="hover:text-neutral-200" />
        </a>
      </div>
    </nav>
  );
};
