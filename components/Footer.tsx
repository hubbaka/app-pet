import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center">
      <div className="p-4 text-center text-neutral-900 dark:text-neutral-100 dark:bg-stone-900 dark:border-t dark:border-stone-600">
        © {new Date().getFullYear()} Wipet
      </div>
    </footer>
  );
};

export default Footer;
