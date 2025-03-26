import React from "react";

export default function Contact() {
  return (
    <section id="rsvp" className="w-full relative py-20 bg-LitePink">
      <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-OrcheidDark text-center mb-10 font-comfortaa">
          Potwierdź Obecność
        </h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Imię i Nazwisko *
            </label>
            <input
              className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-OrcheidDark transition-shadow duration-300"
              id="name"
              type="text"
              placeholder="Wpisz swoje imię i nazwisko"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="message"
            >
              Wiadomość
            </label>
            <textarea
              className="shadow-sm appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-OrcheidDark transition-shadow duration-300"
              id="message"
              placeholder="Napisz wiadomość"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="attendance"
            >
              Czy będziesz z nami? *
            </label>
            <div className="flex space-x-6 mt-2">
              <label className="inline-flex items-center relative">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                  name="attendance"
                  value="yes"
                  required
                />
                <span className="ml-2 text-gray-700">Tak</span>
              </label>
              <label className="inline-flex items-center relative">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                  name="attendance"
                  value="maybe"
                />
                <span className="ml-2 text-gray-700">Może</span>
              </label>
              <label className="inline-flex items-center relative">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 appearance-none border border-gray-300 rounded-full checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-OrcheidDark cursor-pointer peer relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:rounded-full after:bg-transparent checked:after:bg-OrcheidDark checked:after:block"
                  name="attendance"
                  value="no"
                />
                <span className="ml-2 text-gray-700">Nie</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-OrcheidDark hover:bg-Orcheid text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2 transition-colors duration-300"
              type="submit"
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
