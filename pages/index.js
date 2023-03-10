import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });
  return (
    <>
      <Head>
        <title>Mi Casa Su Shasta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl tracking-wide text-teal-500">
            Mi Casa Su Shasta
          </h1>
          <p className="text-base mt-8 mb-4 underline decoration-teal-500 underline-offset-4">
            4 Bedrooms, 2 Bathrooms, Sleeps 12, Dog & Kid Friendly, Golf Cart
            Included
          </p>
        </div>

        <div>
          <Navbar />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <div className="w-full h-[32rem] relative mt-6">
              <Image
                src="/front-wide-low.jpeg"
                alt="Next.js Logo"
                fill
                className="object-cover rounded"
                // width={1920}
                // height={700}
                priority
              />
            </div>
            <div>
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">1</div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 rounded">
              <div className="mt-10">
                <ul className="flex">
                  <li>
                    <div className="p-4 h-full mx-4 border rounded flex items-center">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                          />
                        </svg>
                      </div>
                      <div className="p-4 h-full mx-4">
                        <div className="font-semibold">House</div>
                        <ul>
                          <li>1,641 sq. ft</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="p-4 h-full mx-4 border rounded flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </div>
                      <div className="p-4 h-full mx-4">
                        <div className="font-semibold">4 bedrooms</div>
                        <ul className="flex">
                          <li>9 beds</li>
                          <li className="ml-2">Sleeps 12</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="p-4 h-full mx-4 border rounded flex items-center">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </div>
                      <div className="p-4 h-full mx-4">
                        <div className="font-semibold">2 bathrooms</div>
                        <ul>
                          <li>2 full baths</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="p-4 h-full mx-4 border rounded flex items-center">
                      <div className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      </div>
                      <div className="px-2">
                        <div className="font-semibold">Spaces</div>
                        <ul className="flex">
                          <li>Kitchen</li>
                          <li className="ml-2">Living Room</li>
                          <li className="ml-2">Patio</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full mt-12 p-10 text-white bg-teal-500">
                <p>
                  Escape to paradise at our tropical oasis! Located right near
                  the beach, this Jimmy Buffett-style Airbnb boasts breathtaking
                  ocean views and a laid-back vibe. Savor the island life with a
                  cold drink in hand, as you relax on the spacious deck or
                  lounge by the private pool. Decorated with vibrant hues and
                  beachy accents, the house exudes a fun and playful energy,
                  just like the lyrics of a classic Jimmy Buffett tune. Cook up
                  delicious meals in the fully-equipped kitchen or fire up the
                  grill for a seaside barbecue, while you hum along to
                  "Margaritaville" or "Cheeseburger in Paradise." With
                  comfortable sleeping arrangements for up to X guests, this
                  beach house is the perfect place for a relaxing getaway with
                  friends or family, where life is just a beach away
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="flex w-full">
              <div className="text-teal-500 bg-yellow-100 px-36 flex flex-col justify-center w-1/2">
                <h2 className="text-4xl mb-4 uppercase">Contact</h2>
                <div>Kiska Beach</div>
                <div>garysarahvarner@gmail.com</div>
                <div>
                  <a>www.airbnb.com</a>
                </div>
                <div>
                  <a>www.vrbo.com</a>
                </div>
              </div>
              <div>
                <Image
                  src="/contact-beach.jpg"
                  alt="beach scene"
                  width={600}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
