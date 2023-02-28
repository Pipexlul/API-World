import FooterAPILink from "./FooterAPILink";
import FooterNetworkButton from "./FooterNetworkButton";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-gray-50">
      <div className="container mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
        <div className="grid grid-cols-12">
          <div className="col-span-full pb-6 md:col-span-6 md:pb-0">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <span className="self-center text-2xl font-semibold">
                API
                <span className="text-violet-400">World</span>
              </span>
            </a>
          </div>
          <div className="col-span-6 text-center md:col-span-3 md:text-left">
            <p className="pb-1 text-lg font-medium">APIs consumibles</p>
            <ul>
              {/* TODO: Make links appear dynamically like the rest of the app */}
              <li>
                <FooterAPILink label="Star Wars" url="https://swapi.dev/api/" />
              </li>
              <li>
                <FooterAPILink label="Pokemon" url="https://pokeapi.co/" />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
            <span>©2023 Pipexlul</span>
          </div>
          <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
            <FooterNetworkButton
              title="Linkedin"
              link="https://www.linkedin.com/in/felipe-guajardo-39233523a/"
              svg="linkedin"
            />
            <FooterNetworkButton
              title="Github"
              link="https://github.com/Pipexlul"
              svg="github"
            />
            <FooterNetworkButton
              title="Twitter"
              link="https://twitter.com/Pipexlul"
              svg="twitter"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
