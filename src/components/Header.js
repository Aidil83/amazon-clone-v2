import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image src="https:links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex h-10 rounded-md flex-grow cursor-pointer">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none focus:shadow focus:ring-4" type="text" />
          <button className="h-10 py-1 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-r-md focus:outline-none focus:shadow focus:ring-4">
            <SearchIcon className="h-5" />
          </button>
        </div>
      </div>

      <div></div>
    </header>
  )
}

export default Header;
