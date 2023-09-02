const Footer = () => {
  return (
    <div className="details flex items-center md:flex-nowrap flex-wrap border-t border-white h-40 justify-between px-6 ">
      <p className="font-satoshi text-base text-white font-normal">
        conferences / parties / side-events /<br></br> business development /
        marketing / pr
      </p>
      <div>
        <p className="font-satoshi text-base text-white font-normal md:text-right pt-1">
          Party Action People Pte. Ltd.
        </p>
        <p className="font-satoshi text-base text-white font-normal md:text-right pt-1">
          Seletar, Singapore
        </p>
        <a
          href="https://t.me/partyactionpeople"
          target="_blank"
          className="cursor-pointer"
        >
          <p className="font-satoshi text-base text-white font-normal md:text-right pt-1">
            t.me/partyactionpeople
          </p>
        </a>
      </div>
    </div>
  );
};
export default Footer;
