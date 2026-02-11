"use client";

import SiteStickyNav from "@/components/SiteStickyNav";

interface NavbarProps {
  pageType: "dev" | "design";
}

const Navbar = ({ pageType }: NavbarProps) => {
  const basePath = pageType === "dev" ? "/dev" : "/design";

  const navItems = [
    { name: "Projects", link: `${basePath}/#projects` },
    ...(pageType === "dev" ? [{ name: "Work", link: `${basePath}/#work` }] : []),
    { name: "Contact", link: `${basePath}/#contact` },
  ];

  return <SiteStickyNav navItems={navItems} pageType={pageType} />;
};

export default Navbar;
