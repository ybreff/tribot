import React, { Component, Fragment } from "react";
// import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import Link from 'next/link'
import {
  BellIcon,
  HomeIcon,
  CogIcon,
  LogoutIcon,
  MenuAlt2Icon,
  UsersIcon,
  UserIcon,
  DocumentReportIcon,
  AdjustmentsIcon,
  XIcon,
  KeyIcon,
} from "@heroicons/react/outline";
import cube from "../../assets/images/icons/cube_white.png";
// import Loading from '../loading';
import Message from "../message";
import { actionMessage } from "../../store/actions/SharedActions";
import { CONSTANTS_MESSAGE } from "../../constants/ConstantsMessages";
import Button from "../button";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Layout extends Component {
  constructor(oProps) {
    super(oProps);
    this.state = {
      sidebarOpen: false,
      currentPage: ""
    };
  }

  componentDidMount = () => {
    // if (!this.props.propsLogin.bStatus) {
    //   Router.push("/login");
    // }
    console.log(Router.pathname)
    this.setState({
      currentPage: Router.pathname,
    });
  };

  setSidebarOpen = (newState) => {
    this.setState({
      sidebarOpen: newState,
    });
  };


  sendMessage = () => {
    toast.error("Gateway removed succefull");
  };

  render() {
    const currentPage = this.state.currentPage
    const navigation = [
      { name: "Panel Principal", href: "/", icon: HomeIcon, current: currentPage == "/" },
      { name: "Gestionar Usuarios", href: "usuarios", icon: UsersIcon, current: currentPage == "/usuarios" },
      { name: "Gestionar Permisos", href: "permisos", icon: KeyIcon, current: currentPage == "/permisos" },
      { name: "Perfil", href: "perfil", icon: UserIcon, current: currentPage == "/perfil" },
      { name: "Informes", href: "informes", icon: DocumentReportIcon, current: currentPage == "/informes" },
      { name: "Ajustes", href: "ajustes", icon: AdjustmentsIcon, current: currentPage == "/ajustes" },
    ];

    const pageTitle = navigation.filter(item =>  item.current)[0];

    return (
      <>
        <div>
          <Transition.Root show={this.state.sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 md:hidden"
              onClose={this.setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => this.setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img className="h-8 w-auto" src={cube.src} alt="Tribot" />
                      <h2 className="text-gray-100 text-4xl ml-4">Tribot</h2>
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                      <nav className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <Link href={item.href} key={item.name}>
                            <a
                              key={item.name}
                              href="#"
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-300"
                                    : "text-gray-400 group-hover:text-gray-300",
                                  "mr-4 flex-shrink-0 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                  {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 bg-gray-900">
              <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 border-b-2 border-gray-400" >
                <img className="h-8 w-auto" src={cube.src} alt="Tribot" />
                <h2 className="text-gray-100 text-4xl ml-4">Tribot</h2>
              </div>
              <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 border-b-2 border-gray-400">
                <img className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""/>
                <div>  
                  <h2 className="text-gray-100 text-xs ml-4 w-full">
                        Buenas tardes, 
                        <strong>&nbsp; Juan Carlos</strong>
                  </h2>
                  <h2 className="text-gray-100 text-xs ml-4 w-full">
                        RUC:  
                        <strong>&nbsp; 12345678-9</strong>
                  </h2>
                </div>
              </div>
              <div className="flex items-center h-12 flex-shrink-0 px-4 bg-gray-900 border-b-2 border-gray-400">
                <div>  
                  <h2 className="text-gray-100 text-xs ml-4 w-full">
                        Has ingresado con el Rol: 
                  </h2>
                  <h2 className="text-gray-100 text-xs ml-4 w-full">
                        <strong>Administrador</strong>
                  </h2>
                </div>
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto">
                <nav className="flex-1 px-2 py-4 space-y-1">
                  {navigation.map((item) => (
                     <Link href={item.href} key={item.name}>
                        <a
                          key={item.name}
                          href="#"
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-300"
                                  : "text-gray-400 group-hover:text-gray-300",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                        </a>
                      </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="md:pl-64 flex flex-col">
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
              <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => this.setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex"></div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 mx-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="bg-white p-1 mx-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Confiuración</span>
                    <CogIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="bg-white p-1 mx-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Salir</span>
                    <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            {/* <Button label="Open Modal" onClick={() => this.sendMessage()}/>   */}
            <main>
              <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">{pageTitle ? pageTitle.name : ""}</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  {/* Replace with your content */}
                  <div className="py-4">
                    {this.props.children}
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
            
          </div>
          <Message />
        </div>
        {/* <Loading /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  propsLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  message: (sMessage, sType) => {
    dispatch(actionMessage(sMessage, sType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
