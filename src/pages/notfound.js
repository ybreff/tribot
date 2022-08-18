import cube from "../assets/images/icons/cube1.png";
import bg_image from "../assets/images/login_bg.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-white h-screen flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <Link href="/">
                    <a className="inline-flex">
                        <span className="sr-only">Tribot</span>
                        <img className="h-20 w-auto" src={cube.src} alt="" />
                        <h2 className="text-7xl">Tribot</h2>
                    </a>
                </Link>
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide text-6xl">
                  404
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Página no encontrada
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Lo sentimos, no hemos podido encontrar la página que busca.
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                      Regresar al inicio<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 bg-gray-50">
            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
              <nav className="flex space-x-4">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  Contacto de soporte
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bg_image.src}
          />
        </div>
      </div>
    </>
  );
}
