

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Career Ed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
