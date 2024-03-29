// Globals
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from './Hero.module.css';

export default function Hero({
  changeActiveSelection,
}) {
  return (
    <section
      className={`
        bg-right-bottom bg-cover bg-no-repeat
        min-h-fit
        ${styles.Container}
      `}
    >
      <div
        className="
          px-4
          container mx-auto
        "
      >
        <Link
          href="#top"
        >
          <a
            className="
              transition ease-in-out duration-100
              hover:opacity-80
              block
              pt-8
              pb-16
            "
          >
            <Image
              src="/images/logo/isolant-white.svg"
              width={88}
              height={30}
            />
          </a>
        </Link>
        <h1
          className="
            text-gray-700 tracking-wide
            mb-6
            flex items-center
            uppercase font-bold
          "
        >
          <Image
            src="/images/logo/rufi-dark.svg"
            width={112}
            height={32}
          />
          <span
            className="
              mx-6
              border-t border-t-2 border-t-gray-800 border-b border-b-2 border-b-gray-800 border-opacity-30
              italic
            "
          >
            es
          </span>
          <span
            className="
              text-3xl md:text-4xl
            "
          >
            Isolant
          </span>
        </h1>
        <div
          className="
            bg-white
            max-w-xl
            p-6
            rounded-t-md
          "
        >
          <h2
            className="
              text-gray-700 text-xl md:text-2xl font-bold mb-2
            "
          >
            Aisl&aacute; y ahorr&aacute; con nuestros aislantes!
          </h2>
          <p
            className="
              text-gray-400
              tracking-wide leading-relaxed
              font-light
            "
          >
            RUFI es el nuevo aislante t&eacute;rmico econ&oacute;mico, que responde a un mercado de necesidades competitivas, sin dejar de ser una espuma de calidad Isolant. Una relaci&oacute;n precio calidad que te permitir&aacute; decidir f&aacute;cilmente qu&eacute; poner en tu obra, validado por una empresa con m&aacute;s de 30 a&ntilde;os en el mercado.
          </p>
          <a
            className="
              mt-4
              uppercase
              tracking-wider
              font-bold
              text-sm
              text-orange-500 hover:text-orange-400
              flex items-center
            "
            href="#galpones-y-tinglados"
          >
            conoc&eacute; m&aacute;s
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-2">
              <path d="M9.55664 5.2207C9.32227 4.98633 8.9707 5.00977 8.73633 5.2207L6.06445 8.05664V1.30664C6.06445 1.00195 5.80664 0.744141 5.50195 0.744141H4.75195C4.42383 0.744141 4.18945 1.00195 4.18945 1.30664V8.05664L1.49414 5.2207C1.25977 5.00977 0.908203 4.98633 0.673828 5.2207L0.158203 5.73633C-0.0527344 5.94727 -0.0527344 6.32227 0.158203 6.5332L4.72852 11.0801C4.93945 11.3145 5.29102 11.3145 5.52539 11.0801L10.0723 6.5332C10.2832 6.32227 10.2832 5.9707 10.0723 5.73633L9.55664 5.2207Z" />
            </svg>
          </a>
          {/* <form
            className="
              mt-4
              flex flex-col items-start
            "
            onSubmit={(e) => changeActiveSelection(e)}
          >
            <label
              className="
                uppercase tracking-wide
                text-sm text-gray-400
                font-light
                mb-2
                "
            >
              ¿qu&eacute; necesit&aacute;s aislar?
            </label>
            <select
              className="
                p-3
                rounded-md
                bg-gray-100
                text-gray-800
                w-full
              "
            >
              <option
                disabled={true}
                selected={true}
              >
                Eleg&iacute; una opci&oacute;n debajo
              </option>
              <option
                value="galpones-y-tinglados"
              >
                Galpones y Tinglados
              </option>
              <option
                value="vivienda-estructura-metalica-cubierta-chapa-y-cielorraso"
              >
                Vivienda Estructura met&aacute;lica, Cubierta chapa y cielorraso
              </option>
              <option
                value="vivienda-cubierta-teja-y-machimbre"
              >
                Vivienda Cubierta teja y machimbre
              </option>
            </select>
            <button
              className="
                mt-4
                uppercase
                tracking-wider
                font-bold
                text-sm
                text-orange-500 hover:text-orange-400
                flex items-center
              "
            >
              ver resultados
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-2">
                <path d="M9.55664 5.2207C9.32227 4.98633 8.9707 5.00977 8.73633 5.2207L6.06445 8.05664V1.30664C6.06445 1.00195 5.80664 0.744141 5.50195 0.744141H4.75195C4.42383 0.744141 4.18945 1.00195 4.18945 1.30664V8.05664L1.49414 5.2207C1.25977 5.00977 0.908203 4.98633 0.673828 5.2207L0.158203 5.73633C-0.0527344 5.94727 -0.0527344 6.32227 0.158203 6.5332L4.72852 11.0801C4.93945 11.3145 5.29102 11.3145 5.52539 11.0801L10.0723 6.5332C10.2832 6.32227 10.2832 5.9707 10.0723 5.73633L9.55664 5.2207Z" />
              </svg>
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}