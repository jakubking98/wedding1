"use client";
import React, { useState } from "react";

export default function Contact() {
  const [showCompanionMeals, setShowCompanionMeals] = useState(false);
  const [showChildrenDetails, setShowChildrenDetails] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showTransport, setShowTransport] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companion, setCompanion] = useState("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mainVegetarian, setMainVegetarian] = useState("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companionVegetarian, setCompanionVegetarian] = useState("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [children, setChildren] = useState("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transport, setTransport] = useState("no");

  const handleCompanionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanion(event.target.value);
    setShowCompanionMeals(event.target.value === "yes");
  };

  const handleChildrenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildren(event.target.value);
    const isChildren = event.target.value === "yes";
    setShowChildrenDetails(isChildren);
    if (!isChildren) {
      setChildrenCount(0);
      setChildAges([]);
    }
  };

  const handleChildrenCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const count = parseInt(event.target.value, 10);
    setChildrenCount(isNaN(count) ? 0 : count);
    setChildAges(Array(isNaN(count) ? 0 : count).fill("Do 3 lat"));
  };

  const handleChildAgeChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newAges = [...childAges];
    newAges[index] = event.target.value;
    setChildAges(newAges);
  };

  const handleTransportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransport(event.target.value);
    setShowTransport(event.target.value === "yes");
  };

  const handleMainVegetarianChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMainVegetarian(event.target.value);
  };

  const handleCompanionVegetarianChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanionVegetarian(event.target.value);
  };

  const renderChildMealOptions = () => {
    const childMealOptions = [];
    for (let i = 0; i < childrenCount; i++) {
      childMealOptions.push(
        <div key={i} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Dziecko {i + 1} - Przedział wiekowy *
            </label>
            <select
              className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-OrcheidDark transition-shadow duration-300"
              value={childAges[i]}
              onChange={(event) => handleChildAgeChange(i, event)}
              required
            >
              <option value="Do 3 lat">Do 3 lat</option>
              <option value="3-10 lat">3-10 lat</option>
              <option value="Powyżej 10 lat">Powyżej 10 lat</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Dziecko {i + 1} - Posiłek Wege/Vegan? *
            </label>
            <div className="flex space-x-6 mt-2 h-[48px] items-center">
              <label className="inline-flex items-center relative">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                  name={`child-${i}-vegetarian`}
                  value="no"
                  defaultChecked
                />
                <span className="ml-2 text-gray-700">Nie</span>
              </label>
              <label className="inline-flex items-center relative">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                  name={`child-${i}-vegetarian`}
                  value="yes"
                />
                <span className="ml-2 text-gray-700">Tak</span>
              </label>
            </div>
          </div>
        </div>
      );
    }
    return childMealOptions;
  };

  return (
    <section id="rsvp" className="w-full relative py-20 bg-LitePink">
      <div className="max-w-6xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-OrcheidDark text-center mb-10 font-comfortaa">
          Potwierdź Obecność
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Name */}
            <div className="flex flex-col">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Imię i Nazwisko *
              </label>
              <input
                className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-OrcheidDark transition-shadow duration-300 h-[48px]"
                id="name"
                type="text"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>

            {/* Companion */}
            <div className="flex flex-col">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="companion"
              >
                Osoba towarzysząca? *
              </label>
              <div className="flex space-x-6 mt-2 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="companion"
                    value="no"
                    onChange={handleCompanionChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="companion"
                    value="yes"
                    onChange={handleCompanionChange}
                  />
                  <span className="ml-2 text-gray-700">Tak</span>
                </label>
              </div>
            </div>

            {/* Main Guest Meal */}
            <div className="flex flex-col">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="vegetarian"
              >
                Posiłek Wege/Vegan? *
              </label>
              <div className="flex space-x-6 mt-2 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="main-vegetarian"
                    value="no"
                    onChange={handleMainVegetarianChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="main-vegetarian"
                    value="yes"
                    onChange={handleMainVegetarianChange}
                  />
                  <span className="ml-2 text-gray-700">Tak</span>
                </label>
              </div>
            </div>

            {/* Companion Meal */}
            {showCompanionMeals && (
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="companion-vegetarian"
                >
                  Posiłek Wege/Vegan - Osoba towarzysząca? *
                </label>
                <div className="flex space-x-6 mt-2 h-[48px] items-center">
                  <label className="inline-flex items-center relative">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                      name="companion-vegetarian"
                      value="no"
                      onChange={handleCompanionVegetarianChange}
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700">Nie</span>
                  </label>
                  <label className="inline-flex items-center relative">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                      name="companion-vegetarian"
                      value="yes"
                      onChange={handleCompanionVegetarianChange}
                    />
                    <span className="ml-2 text-gray-700">Tak</span>
                  </label>
                </div>
              </div>
            )}

            {/* Children */}
            <div className="flex flex-col">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="children"
              >
                Dzieci? *
              </label>
              <div className="flex space-x-6 mt-2 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="children"
                    value="no"
                    onChange={handleChildrenChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="children"
                    value="yes"
                    onChange={handleChildrenChange}
                  />
                  <span className="ml-2 text-gray-700">Tak</span>
                </label>
              </div>
            </div>
            {/* Children Count */}
            {showChildrenDetails && (
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="childrenCount"
                >
                  Ile dzieci? *
                </label>
                <input
                  className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-OrcheidDark transition-shadow duration-300 h-[48px]"
                  id="childrenCount"
                  type="number"
                  placeholder="Wpisz liczbę dzieci"
                  min="0"
                  value={childrenCount}
                  onChange={handleChildrenCountChange}
                  required
                />
              </div>
            )}
            {/* Transport */}
            <div className="flex flex-col">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="transport"
              >
                Transport zbiorowy z pod kościoła? *
              </label>
              <div className="flex space-x-6 mt-2 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="transport"
                    value="no"
                    onChange={handleTransportChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                    name="transport"
                    value="yes"
                    onChange={handleTransportChange}
                  />
                  <span className="ml-2 text-gray-700">Tak</span>
                </label>
              </div>
            </div>
          </div>

          {/* Child Meal Options */}
          {showChildrenDetails && renderChildMealOptions()}

          <div className="flex items-center justify-center mt-8">
            <button
              className="bg-OrcheidDark hover:bg-Orcheid text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2 transition-colors duration-300"
              type="submit"
            >
              Potwierdź Obecność
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
