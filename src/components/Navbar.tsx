import { FloatingNav } from "@/components/ui/floating-navbar";

interface NavbarProps {
  pageType: "dev" | "design"; // Define the prop to indicate the page type
}

const Navbar = ({ pageType }: NavbarProps) => {
  const basePath = pageType === "dev" ? "/dev" : "/design";

  const navItems = [
    {
      name: "Home",
      link: `/`,
    },
    {
      name: "Projects",
      link: `${basePath}/#projects`,
    },
    {
      name: "Contact",
      link: `${basePath}/#contact`,
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} pageType={pageType} />
    </div>
  );
};

export default Navbar;