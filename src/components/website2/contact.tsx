"use client";
import React, { useState } from "react";

export default function Contact() {
  const [showCompanionMeals, setShowCompanionMeals] = useState(false);
  const [showChildrenDetails, setShowChildrenDetails] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);
  const [childVegetarian, setChildVegetarian] = useState<boolean[]>([]);
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
      setChildVegetarian([]);
    }
  };

  const handleChildrenCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const count = parseInt(event.target.value, 10);
    setChildrenCount(isNaN(count) ? 0 : count);
    setChildAges(Array(isNaN(count) ? 0 : count).fill("Do 3 lat"));
    setChildVegetarian(Array(isNaN(count) ? 0 : count).fill(false));
  };

  const handleChildAgeChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newAges = [...childAges];
    newAges[index] = event.target.value;
    setChildAges(newAges);
  };

  const handleChildVegetarianChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVegetarian = [...childVegetarian];
    newVegetarian[index] = event.target.value === "yes";
    setChildVegetarian(newVegetarian);
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

  return (
    <section id="rsvp" className="w-full relative py-20 bg-ColorWeb1">
      <div className="max-w-6xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-ColorWeb2 text-center mb-10 font-comfortaa">
          Potwierdź Obecność
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Name */}
            <div className="flex flex-col">
              <label
                className="block text-ColorWeb3 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Imię i Nazwisko *
              </label>
              <input
                className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-ColorWeb3 leading-tight focus:outline-none focus:shadow-outline focus:border-ColorWeb2 transition-shadow duration-300 h-[48px]"
                id="name"
                type="text"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>

            {/* Companion */}
            <div className="flex flex-col">
              <label
                className="block text-ColorWeb3 text-sm font-medium mb-2"
                htmlFor="companion"
              >
                Osoba towarzysząca? *
              </label>
              <div className="flex space-x-6 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="companion"
                    value="no"
                    onChange={handleCompanionChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-ColorWeb3">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="companion"
                    value="yes"
                    onChange={handleCompanionChange}
                  />
                  <span className="ml-2 text-ColorWeb3">Tak</span>
                </label>
              </div>
            </div>

            {/* Main Guest Meal */}
            <div className="flex flex-col">
              <label
                className="block text-ColorWeb3 text-sm font-medium mb-2"
                htmlFor="vegetarian"
              >
                Posiłek Wege/Vegan? *
              </label>
              <div className="flex space-x-6 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="main-vegetarian"
                    value="no"
                    onChange={handleMainVegetarianChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-ColorWeb3">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="main-vegetarian"
                    value="yes"
                    onChange={handleMainVegetarianChange}
                  />
                  <span className="ml-2 text-ColorWeb3">Tak</span>
                </label>
              </div>
            </div>

            {/* Companion Meal */}
            {showCompanionMeals && (
              <div className="flex flex-col">
                <label
                  className="block text-ColorWeb3 text-sm font-medium mb-2"
                  htmlFor="companion-vegetarian"
                >
                  Posiłek Wege/Vegan - Osoba towarzysząca? *
                </label>
                <div className="flex space-x-6 h-[48px] items-center">
                  <label className="inline-flex items-center relative">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                      name="companion-vegetarian"
                      value="no"
                      onChange={handleCompanionVegetarianChange}
                      defaultChecked
                    />
                    <span className="ml-2 text-ColorWeb3">Nie</span>
                  </label>
                  <label className="inline-flex items-center relative">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                      name="companion-vegetarian"
                      value="yes"
                      onChange={handleCompanionVegetarianChange}
                    />
                    <span className="ml-2 text-ColorWeb3">Tak</span>
                  </label>
                </div>
              </div>
            )}

            {/* Children */}
            <div className="flex flex-col">
              <label
                className="block text-ColorWeb3 text-sm font-medium mb-2"
                htmlFor="children"
              >
                Dzieci? *
              </label>
              <div className="flex space-x-6 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="children"
                    value="no"
                    onChange={handleChildrenChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-ColorWeb3">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="children"
                    value="yes"
                    onChange={handleChildrenChange}
                  />
                  <span className="ml-2 text-ColorWeb3">Tak</span>
                </label>
              </div>
            </div>
            {/* Children Count */}
            {showChildrenDetails && (
              <div className="flex flex-col">
                <label
                  className="block text-ColorWeb3 text-sm font-medium mb-2"
                  htmlFor="childrenCount"
                >
                  Ile dzieci? *
                </label>
                <input
                  className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-ColorWeb3 leading-tight focus:outline-none focus:shadow-outline focus:border-ColorWeb2 transition-shadow duration-300 h-[48px]"
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
            {/* Child Meal Options */}
            {showChildrenDetails &&
              Array.from({ length: childrenCount }).map((_, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col">
                    <label className="block text-ColorWeb3 text-sm font-medium mb-2">
                      Dziecko {index + 1} - Przedział wiekowy *
                    </label>
                    <select
                      className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-ColorWeb3 leading-tight focus:outline-none focus:shadow-outline focus:border-ColorWeb2 transition-shadow duration-300"
                      value={childAges[index] || "Do 3 lat"}
                      onChange={(event) => handleChildAgeChange(index, event)}
                      required
                    >
                      <option value="Do 3 lat">Do 3 lat</option>
                      <option value="3-10 lat">3-10 lat</option>
                      <option value="Powyżej 10 lat">Powyżej 10 lat</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-ColorWeb3 text-sm font-medium mb-2">
                      Dziecko {index + 1} - Posiłek Wege/Vegan? *
                    </label>
                    <div className="flex space-x-6 h-[48px] items-center">
                      <label className="inline-flex items-center relative">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                          name={`child-${index}-vegetarian`}
                          value="no"
                          checked={childVegetarian[index] === false}
                          onChange={(event) =>
                            handleChildVegetarianChange(index, event)
                          }
                        />
                        <span className="ml-2 text-ColorWeb3">Nie</span>
                      </label>
                      <label className="inline-flex items-center relative">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                          name={`child-${index}-vegetarian`}
                          value="yes"
                          checked={childVegetarian[index] === true}
                          onChange={(event) =>
                            handleChildVegetarianChange(index, event)
                          }
                        />
                        <span className="ml-2 text-ColorWeb3">Tak</span>
                      </label>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            {/* Transport */}
            <div className="flex flex-col">
              <label
                className="block text-ColorWeb3 text-sm font-medium mb-2"
                htmlFor="transport"
              >
                Transport zbiorowy z pod kościoła? *
              </label>
              <div className="flex space-x-6 h-[48px] items-center">
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="transport"
                    value="no"
                    onChange={handleTransportChange}
                    defaultChecked
                  />
                  <span className="ml-2 text-ColorWeb3">Nie</span>
                </label>
                <label className="inline-flex items-center relative">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 appearance-none border border-ColorWeb4 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ColorWeb2 cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-ColorWeb2 checked:after:block"
                    name="transport"
                    value="yes"
                    onChange={handleTransportChange}
                  />
                  <span className="ml-2 text-ColorWeb3">Tak</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              className="bg-ColorWeb2 hover:bg-Orcheid text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2 transition-colors duration-300"
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
