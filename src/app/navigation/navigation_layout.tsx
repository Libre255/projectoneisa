'use client'
import { Menu } from '@headlessui/react';
import React from 'react';
import Menu_dropdown from './menu_drowndown';

type Props = {
  // Define your props here
};

const Navigation_layout: React.FC<Props> = ({ }) => {
  return (
    <div className="min-h-screen bg-gray-600 pt-10 border">
        <div className="flex items-center justify-between md:container mx-auto px-6 md:px-0">

            <img className="h-6" src="https://i.imgur.com/72LlPhM.png" alt="Nike" />

            {/* <h1 className="text-2xl font-bold text-gray-900 sm:hidden">NIKE</h1> */}

            <div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0">
                <Menu_dropdown/>
                <Menu_dropdown/>
                <Menu_dropdown/>
                <Menu_dropdown/>
            </div>
            <div className="flex">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 cursor-pointer" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>
                      <div className="relative ml-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 cursor-pointer" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                      </div>
                    </span>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Navigation_layout;