const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 md:mb-14 text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
      {title}
    </h2>
  );
};

export default SectionTitle;