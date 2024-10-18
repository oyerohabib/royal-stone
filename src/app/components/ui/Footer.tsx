export const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-semibold text-xl">Royal Stone</h3>
          <p>© 2024 Royal Stone. All rights reserved.</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
