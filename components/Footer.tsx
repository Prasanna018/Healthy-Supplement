import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/" className="hover:underline text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about" className="hover:underline text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/products" className="hover:underline text-gray-600 hover:text-gray-800">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/terms" className="hover:underline text-gray-600 hover:text-gray-800">
                  Terms
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/privacy" className="hover:underline text-gray-600 hover:text-gray-800">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-gray-800">
                  Instagram
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-gray-800">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/blog" className="hover:underline text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" className="hover:underline text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

