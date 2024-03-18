import React from 'react';
import StickySidebar from './sidebar.jsx';
import PrintButton from './printbutton.jsx';

import { Link } from 'react-router-dom';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";


 
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


 
  const navList = (
    <ul className="flex flex-col lg:flex-row lg:items-center justify-start">
      <Typography
        as="li"
        variant="big"
        color="white"
        className="p-1 font-normal" // Add ml-auto class
        
      >
        <a
          href="https://www.google.com/"
          className="flex items-center"
          target="_blank"           // Open link in new tab
          rel="noopener noreferrer" // Security attributes
        >
          Support
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black">
        <div className="flex items-center justify-between text-white">
        {/* <StickySidebar></StickySidebar> */}
        <Typography
  as={Link} // Use Link from react-router-dom
  to="http://localhost:3000" // Specify the URL to route to port 3000
  className="mr-auto cursor-pointer py-1.5 font-medium"
>
  Home
</Typography>
          <div className="flex items-center gap-4">
  <div className="ml-auto lg:mr-4 lg:block">{navList}</div>
  <div className="flex items-center gap-x-1">
    
    <PrintButton />
 
  </div>
 
</div>

        </div>
      
      </Navbar>
      {/* <div className="mx-auto max-w-screen-md py-12"> */}
        {/* <Typography variant="h2" color="blue-gray" className="mb-2">
          Slide Down To Get MD Files content */}
          {/* <Md1></Md1> */}
          {/* <El1></El1>
          <Lk1></Lk1>
          <Fw1></Fw1>
          <Hw1></Hw1> */}
        {/* </Typography> */}
        {/* <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography> */}
      {/* </div> */}
    </div>
  );
}