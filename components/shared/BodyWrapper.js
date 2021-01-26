const BodyWrapper = ({ children }) => {
  return (
    <section className="w-full lg:w-2/5 lg:h-screen flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

export default BodyWrapper;
