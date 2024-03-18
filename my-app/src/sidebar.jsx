import React from "react";
import Verticalnav from "./rightsmallnav";
//import Md1 from './mardown_loader'
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// import MarkdownIt from 'markdown-it';

// const md = new MarkdownIt();
//   MarkdownIT=() =>{
//     const [markdownContent, setMarkdownContent] = React.useState('');

//     const fetchMarkdownContent = async (fileName) => {
//         try {
//             const response = await fetch(`/markdown/${fileName}.md`);
//             const data = await response.text();
//             setMarkdownContent(md.render(data));
//         } catch (error) {
//             console.error('Error fetching Markdown content:', error);
//         }
//     }
//   };

// const StyledComponent = () => {
//   return (
//     <div style={{
//       position: "fixed",
//       top: "calc(100px + 50px)",
//       right: "10px",
//       backgroundColor: "lightblue",
//       padding: "10px",
//       borderRadius: "5px",
//       overflowY: "auto" // Add overflowY for vertical scrolling
//     }}>
//       <Verticalnav></Verticalnav>
//     </div>
//   );
// };

const handleActionColumnClick = () => {
  // Execute your desired function here
  // <StyledComponent></StyledComponent>
  console.log("Action Column clicked!");
};

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [childOpen, setChildOpen] = React.useState(false);
  const [grandchildOpen, setGrandchildOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const [showStyledComponent, setShowStyledComponent] = React.useState(false);

  // const handleActionColumnClick = () => {
  //   // Toggle the state to show/hide the StyledComponent
  //   setShowStyledComponent(!showStyledComponent);
  //   console.log("Action Column clicked!");
  // };
  const [flag, setFlag] = React.useState(false);

  const [selectedFileName, setSelectedFileName] = React.useState(""); // State to store the selected filename

  // Function to handle the click event and open the file
  const alternatefun = () => {
    setSelectedFileName("Forward.md"); // Set the selected filename
    setFlag(true); // Show the Md1 component
  };

  const handleItemClick = (component) => {
    // Perform an action with the component
    console.log("Item clicked:", component);
  };

  const handleOpen = (index) => {
    //console.log(index);
    setOpen(open === index ? 0 : index);
    // If the parent accordion is being opened, also open the child accordion
    if (open !== index) {
      setChildOpen(false);
      setGrandchildOpen(false);
    }
  };

  // Function to toggle the state of the child accordion
  const toggleChildAccordion = () => {
    setChildOpen(!childOpen);
    if (!childOpen) {
      setGrandchildOpen(false);
    }
  };
  const toggleGrandchildAccordion = () => {
    setGrandchildOpen(!grandchildOpen);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer} style={{backgroundColor:"#3f3c3f"}}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4">
          <div className="mb-2 flex items-center gap-4 p-4">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    UI Navigation Tour
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* Child accordion (Analytics) */}
              <AccordionBody open={childOpen} className="py-1">
                <List className="p-0">
                  <ListItem onClick={toggleChildAccordion}>
                    <ListItemPrefix>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-1 h-4 w-4 transition-transform ${
                          childOpen ? "rotate-180" : ""
                        }`}
                      />
                    </ListItemPrefix>
                    <button>Report Types</button>
                  </ListItem>
                  {/* Render child elements conditionally based on childOpen state */}

                  {childOpen && (
                    <ListItem>
                      {/* Grandchild accordion */}
                      <Accordion
                        open={grandchildOpen}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              grandchildOpen ? "rotate-180" : ""
                            }`}
                          />
                        }>
                        <ListItem className="p-0" selected={grandchildOpen}>
                          <AccordionHeader
                            onClick={toggleGrandchildAccordion}
                            className="border-b-0 p-3">
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`transition-transform ${
                                  childOpen ? "rotate-180" : ""
                                }`}
                              />
                            </ListItemPrefix>
                            <button
                              onClick={handleActionColumnClick}
                              className="flex items-center outline-none">
                              <Typography
                                color="blue-gray"
                                className="mr-auto font-normal">
                                Action Column
                              </Typography>
                            </button>
                            {/* {showStyledComponent && <StyledComponent />} */}
                          </AccordionHeader>
                        </ListItem>

                        {/* Grandchild accordion body */}
                        <AccordionBody className="py-1">
                          <List className="p-0">
                            <ListItem>
                              <Link to="/ellipsis">Ellipse</Link>
                            </ListItem>
                          </List>
                        </AccordionBody>

                        <AccordionBody className="py-1">
                          <List className="p-0">
                            <ListItem>
                              <Link to="/linkfill">Link Filter</Link>
                            </ListItem>
                          </List>
                        </AccordionBody>

                        <AccordionBody className="py-1">
                          <List className="p-0">
                            <ListItem>
                              <Link to="/forwardfill">Forward</Link>
                            </ListItem>
                          </List>
                        </AccordionBody>

                        <AccordionBody className="py-1">
                          <List className="p-0">
                            <ListItem>
                              <Link to="/hamburgerfill">Hamburger</Link>
                            </ListItem>
                          </List>
                        </AccordionBody>
                      </Accordion>
                    </ListItem>
                  )}

                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Data Integration
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Supply Planning
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 4 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Demand Planning
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 5 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 5}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Knowledge Hub
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 6 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 6}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Sustainability Solutions
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 7}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 7 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 7}>
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Production Scheduling
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 8}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 8 ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className="p-0" selected={open === 8}>
                <AccordionHeader
                  onClick={() => handleOpen(8)}
                  className="border-b-0 p-3">
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Next Generation Procurement
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
          </List>
        </Card>
      </Drawer>
    </>
  );
}
export default SidebarWithBurgerMenu;

// const StyledComponent = () => {
//   return (
//     <div style={{ position: "fixed", top: "10px", right: "10px", backgroundColor: "lightblue", padding: "10px", borderRadius: "5px" }}>
//       {/* Your content here */}
//       <Verticalnav></Verticalnav>
//       Hello, I'm a styled component!
//     </div>
//   );
// };
