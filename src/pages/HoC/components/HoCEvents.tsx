import { SectionTitle } from "../../../components/section/SectionTitle";

/**
 * Renders a section with a title and description about organized events.
 *
 * @returns {JSX.Element} A React component representing the HoC events section.
 */
function HoCEvents() {
  return (
    <section className="px-4 py-12 lg:mx-32 mb-28 lg:mb-32 lg:rounded-xl lg:mt-8 bg-section-primary bg-opacity-90">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <SectionTitle
            title={{ pl: "Wydarzenia", en: "Events" }}
            description={{
              pl: "Zajęcia podzielone są na część teoretyczną i część praktyczną, między którymi zapewniamy uczniom poczęstunek. Uczestnicy zajęć nauczą się pisać proste programy wykorzystujące standardowe wejście i wyjście, poznają podstawowe typy danych, listy i instrukcje warunkowe. Przewidywany czas trwania warsztatów to 3 godziny.",
              en: "The workshops are divided into a theoretical and a practical part, with refreshments provided for students between the two sessions. During the workshops, participants will learn how to write simple programs using standard input and output, get familiar with basic data types, lists, and conditional statements. The estimated duration of the workshop is 3 hours."
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HoCEvents;
