export const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GenX AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
