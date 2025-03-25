interface MemberWindowProps {
  index: number; // Accept index as a prop
  name?: string;
  email?: string;
}

export const MemberWindow = ({ index, name = "imię nazwisko", email = "moj.email@gmail.com" }: MemberWindowProps) => {
  return (
		<div key={index} className="bg-dark-section-primary pt-10 pb-4 rounded-md text-center">
      <div className="w-16 h-24 mx-auto rounded-full mb-4"></div>
      <p className="font-bold">{name}</p>
      <p className="text-dark-text-secondary">{email}</p>
    </div>
  );
};