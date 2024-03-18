import { Typography } from "@material-tailwind/react";
import Elli from "./Ellipsis.jsx";
import Forward from "./Forward.jsx";
import Hamb from "./Hamburger.jsx";
import Filt from "./linkfilter.jsx";
import Md1 from "./mardown_loader.jsx";

export default function TypographyVariants() {
  return (
    <>
      {/* <Typography variant="h1">Material Tailwind</Typography>
      <Typography variant="h2">Material Tailwind</Typography>
      <Typography variant="h3">Material Tailwind</Typography>
      <Typography variant="h4">Material Tailwind</Typography>
      <Typography variant="h5">Material Tailwind</Typography>
      <Typography variant="h6">Material Tailwind</Typography> */}
      <Typography variant="h3">
        {/* <Elli></Elli>
      <Filt></Filt>
      <Forward></Forward>
      <Hamb></Hamb> */}
        <Md1></Md1>
        {/* Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need. */}
      </Typography>
    </>
  );
}
