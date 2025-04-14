import { SectionTitle } from "../../../components/section/SectionTitle";

/**
 * Renders a section with a title and a description about organized events.
 *
 * @returns {JSX.Element} A React component representing the HoC events section.
 */
function HoCEvents() {
  return (
    <section
      className="bg-dark-section-primary z-20 -mt-28 -mb-60 pt-40 pb-72 relative items-center justify-center"
      style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}
    >
      <div className="container flex flex-row gap-20 px-8 md:px-20 lg:px-28 mx-auto items-center">
        <SectionTitle
          title="Wydarzenia"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </section>
  );
}

export default HoCEvents;
