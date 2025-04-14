/**
 * Renders a section header with a centered title and a horizontal line.
 *
 * @param {{ title: string }} props
 * @prop {string} title The title of the section header.
 *
 * @returns {JSX.Element} A section header component.
 */

export const SectionHeader = ({ title }: { title: string }) => (
  <div>
    <h2
      className="text-sans lg:text-4xl text-3xl font-bold mx-auto
                   lg:mx-56 text-center"
    >
      {title}
    </h2>
    <hr className="border-action-blue border-t-4 mt-2 mx-auto w-1/2 lg:w-1/4" />
  </div>
);

export default SectionHeader;
