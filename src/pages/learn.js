import Link from "next/link";
import Image from "next/image";
const Learn = () => {
  return (
    <div className="learnPageMain flex flex-col gap-6 pl-16 pr-16">
      <div className="pageTitle uppercase text-3xl font-extralight">
        Resources
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className="resourcesDiv flex flex-wrap   ">
        <div className="resource flex justify-end gap-8">
          <div className="resourceImage">
            <Image
              src="/images/lenape_dialects.png"
              width="1024"
              height="1024"
              alt="map of Lenapehoking showing spread of different Lenape dialects"
            ></Image>
            <div className="imageCaption text-xs">
              A map of Lenapehoking. The dark green shows the original home of
              the speakers of the Southern Unami dialect of Lenape. Source:{" "}
              <Link href="https://en.wikipedia.org/wiki/Unami_language">
                Wikimedia
              </Link>
            </div>
          </div>
          <div className="resourceText">
            <Link href="https://www.talk-lenape.org/" className="resourceTitle">
              The Lenape Talking Dictionary
            </Link>
            <div className="shortDescription">
              A Lenape-English dictionary with audio recordings and Lenape
              language lessons.
            </div>
            <div className="longerDescription">
              This online audio dictionary was is part of the Delaware Tribe's
              Lenape Language Preservation Project. It focuses on "what
              linguists call the 'Southern Unami Dialect'" of Lenape.
              <Link href="https://delawaretribe.org/culture-and-language/">
                the Delaware Tribe
              </Link>
            </div>
          </div>
        </div>
        <div className="resource flex justify-end w-full">
          <div className="resourceImage">
            <Image
              src="/images/lenape_dialects.png"
              width="1024"
              height="1024"
              alt="map of Lenapehoking showing spread of different Lenape dialects"
            ></Image>
            <div className="imageCaption text-xs">
              A map of Lenapehoking. The dark green shows the original home of
              the speakers of the Southern Unami dialect of Lenape. Source:{" "}
              <Link href="https://en.wikipedia.org/wiki/Unami_language">
                Wikimedia
              </Link>
            </div>
          </div>
          <div className="resourceText">
            <Link href="https://www.talk-lenape.org/" className="resourceTitle">
              The Lenape Talking Dictionary
            </Link>
            <div className="shortDescription">
              A Lenape-English dictionary with audio recordings and Lenape
              language lessons.
            </div>
            <div className="longerDescription">
              This online audio dictionary was is part of the Delaware Tribe's
              Lenape Language Preservation Project. It focuses on "what
              linguists call the 'Southern Unami Dialect'" of Lenape.
              <Link href="https://delawaretribe.org/culture-and-language/">
                the Delaware Tribe
              </Link>
            </div>
          </div>
        </div>
        <div className="resource flex justify-end w-1/3">
          <div className="resourceImage">
            <Image
              src="/images/lenape_dialects.png"
              width="1024"
              height="1024"
              alt="map of Lenapehoking showing spread of different Lenape dialects"
            ></Image>
            <div className="imageCaption text-xs">
              A map of Lenapehoking. The dark green shows the original home of
              the speakers of the Southern Unami dialect of Lenape. Source:{" "}
              <Link href="https://en.wikipedia.org/wiki/Unami_language">
                Wikimedia
              </Link>
            </div>
          </div>
          <div className="resourceText">
            <Link href="https://www.talk-lenape.org/" className="resourceTitle">
              The Lenape Talking Dictionary
            </Link>
            <div className="shortDescription">
              A Lenape-English dictionary with audio recordings and Lenape
              language lessons.
            </div>
            <div className="longerDescription">
              This online audio dictionary was is part of the Delaware Tribe's
              Lenape Language Preservation Project. It focuses on "what
              linguists call the 'Southern Unami Dialect'" of Lenape.
              <Link href="https://delawaretribe.org/culture-and-language/">
                the Delaware Tribe
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="resource w-1/3">
          <Link href="" className="">
            Lenape Names for Flowers
          </Link>
          <div className="shortDescription"> </div>
          <div className="longerDescription"></div>
        </div>
        <div className="resource w-1/3">
          <Link href="" className="">
            the Wild Seed Project
          </Link>
          <div className="shortDescription"> </div>
          <div className="longerDescription"></div>
        </div>
        <div className="resource w-1/3">
          <Link href="">Coming Home to indigenous placenames in Canada</Link>
          <div className="shortDescription"> </div>
          <div className="longerDescription"></div>
        </div>
        <div className="resource w-1/3">
          <Link href="">Sokoki Sojourn</Link>
          <div className="shortDescription"> </div>
          <div className="longerDescription"></div>
        </div>
        <div className="resource w-1/3">
          <Link href="http://naeb.brit.org/">
            the Native American ethnobotany Database
          </Link>
          <div className="shortDescription">
            A Database of Foods, Drugs, Dyes and Fibers of Native American
            Peoples, Derived from Plants.
          </div>
          <div className="longerDescription">
            For example, here is their entry on{" "}
            <Link href="http://naeb.brit.org/uses/species/38/">yarrow.</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Learn;
