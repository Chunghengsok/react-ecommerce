function Footer() {
  return (
    <footer className="bg-primary py-6 text-white">
      <div className="max-w-[90%] lg:max-w-5xl mx-auto flex-cols  lg:flex justify-between items-center">
        <p>Copyright © 2023 HengKhema</p>
        <ul className="flex gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Term and Condition</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
