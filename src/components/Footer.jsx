
const Footer = () => {
  return (
    <footer className='py-3'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-1xl text-center text-white">
          © {new Date().getFullYear()} Suraj Thapa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;