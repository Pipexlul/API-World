import Button from "./Buttons/Button";

const Header = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          API
          <span className="text-violet-400">World</span>
        </h1>
        <p className="mt-8 mb-12 px-8 text-lg">
          Bienvenido a APIWorld, donde podras llamar distintas APIs con
          tematicas variadas. Desde Pokemon, hasta Star Wars, pasando por Rick
          and Morty.
        </p>
        <p className="mb-4 px-8 text-lg">¡Todo desde un sólo lugar!</p>
        <div className="flex flex-wrap justify-center">
          <Button
            text="Empezar"
            extraStyles="px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-400 text-gray-900 hover:bg-emerald-600"
            replaceStyles={true}
          />
          <Button text="¿Cómo funciona?" />
        </div>
      </div>
    </section>
  );
};

export default Header;
