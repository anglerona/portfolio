import { FloatingNav } from "@/components/ui/floating-navbar";

interface NavbarProps {
  pageType: "dev" | "design"; // Define the prop to indicate the page type
}

const Navbar = ({ pageType }: NavbarProps) => {
  const basePath = pageType === "dev" ? "/dev" : "/design";

  // Conditionally include the "Work" button if the pageType is "dev"
  const navItems = [
   
    {
      name: "Projects",
      link: `${basePath}/#projects`,
    },
    ...(pageType === "dev"
      ? [
          {
            name: "Work",
            link: `${basePath}/#work`,
          },
        ]
      : []),
    
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
