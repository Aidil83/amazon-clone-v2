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

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Aidil</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full text-center bg-yellow-400 text-black font-bold">0</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>

        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header;