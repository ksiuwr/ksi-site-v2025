import { SectionTitle } from "../../../components/section/SectionTitle";

/**
 * Renders a section with a title and description about organized events.
 *
 * @returns {JSX.Element} A React component representing the HoC events section.
 */
function HoCEvents() {
  return (
    <section className="px-4 py-12 lg:mx-32 mb-28 lg:mb-32 lg:rounded-xl lg:mt-8 bg-dark-section-primary bg-opacity-90">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <SectionTitle
            title="Wydarzenia"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </div>
    </section>
  );
}

export default HoCEvents;
