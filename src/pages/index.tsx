import React, { useState } from 'react';
import '@fontsource/lancelot/400.css'
import '@fontsource/sail/400.css'
import '@fontsource/playball/400.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/monsieur-la-doulaise/400.css'
import '@fontsource/zen-kaku-gothic-new';
import '@fontsource/kalam';
import '@fontsource/sue-ellen-francisco';

type Item = {
  id: string;
  name: string;
};

const items: Item[] = [
  { id: "123", name: "Luciano Ferraz" },
  { id: "456", name: "Tatiane Ormond" },
  { id: "789", name: "Cleide Ormond" },
];

export default function Home() {

  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showCep, setShowCep] = useState(false);
  const [cep, setCep] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    // verifica se existe id na lista
    const exists = items.some((item) => item.id === value);
    setShowCep(exists);

    const foundItem = items.find((item) => item.id === value);
    setSelectedItem(foundItem ?? null);
  };

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#fcf9f6ff' }}>
      <div className={`flex flex-col w-full justify-start items-center ${!modal && 'h-[76vh]'}`}>
        <img
          className="w-full object-cover object-top"
          style={{}}
          src="/flowers-top.png"
          alt="capa"
        />
        {!modal &&
          <>
            <img
              className="w-[320px] h-[320px] object-cover object-top rounded-full mb-12 mt-[-120px]"
              style={{}}
              src="/capa.webp"
              alt="capa"
            />
            <div className="flex items-center mt-[-20px]">
              <h1 className="text-[60px] mx-2 mb-8 tracking-[0.04em]" style={{ fontFamily: 'Sail, serif' }}>
                Save
              </h1>
              <h1 className="text-[70px] mx-2" style={{ fontFamily: 'Monsieur La Doulaise, cursive' }}>
                the
              </h1>
              <h1 className="text-[60px] mx-2 mt-8 tracking-[0.04em]" style={{ fontFamily: 'Sail, serif' }}>
                Date
              </h1>
            </div>
            <h2 className="text-[22px] font-bold mt-6 tracking-[0.2em]" style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}>
              Tatiane & Luciano
            </h2>
            <p className="text-[20px] tracking-[0.3em]" style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}>are getting married</p>
            <div
              className="flex text-[24px] mt-6 font-bold tracking-[0.2em] gap-4 items-center"
              style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
            >
              <p>.</p>
              <p>12</p>
              <p>.</p>
              <p>08</p>
              <p>.</p>
              <p>2026</p>
              <p>.</p>
            </div>
          </>
        }
      </div>
      {!modal &&
        <div className="w-full mt-28 mb-8">
          <img
            className="w-full object-cover object-center"
            style={{}}
            src="/flowers-mid.png"
            alt="capa"
          />
        </div>
      }
      {(!modal) ?
        <div className="w-full px-16">
          <div
            className="
              flex flex-col items-center mt-8
              text-gray-700 mb-4 text-[22px] gap-6
            "
            style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}>
            <p>
              É com imensa alegria que enviamos este convite de confirmação para o nosso grande dia!
            </p>
            <p>
              Planejamos uma cerimônia intimista e, por isso, selecionamos com carinho cada pessoa
              especial que desejamos ter ao nosso lado nesse momento único.
            </p>
            <p>
              Contamos com a sua confirmação de presença preenchendo os dados abaixo até o dia <b className="tracking-[0.2em] ml-2">31/08</b>:
            </p>
          </div>
          <div className="flex flex-col mt-12 mb-32">
            {selectedItem && (
              <div className="flex flex-col items-center">
                <p
                  className="font-bold text-gray-600 mb-6 text-[22px] text-center tracking-[0.2em]"
                  style={{ fontFamily: 'Sail, serif' }}
                >
                  {selectedItem.name}
                </p>
                <hr className="w-[80%] text-gray-300 mb-2" />
              </div>
            )}
            <input
              className="
                border border-rose-100 rounded-md bg-white
                px-3 py-2 text-base my-2 text-gray-600
                no-underline placeholder:text-gray-400"
              placeholder="Digite seu código"
              style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
              type="text"
              value={name}
              onChange={handleChange}
            />
            {showCep &&
              <input
                type="text"
                placeholder="Seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                className="
                  border border-rose-100 rounded-md bg-white
                  px-3 py-2 text-base my-2 text-gray-600
                  .no-underline placeholder:text-gray-400"
              />
            }
            {cep.length == 8 &&
              <button
                type="button"
                onClick={() => setModal(true)}
                style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                className="
                  rounded-md bg-rose-400 font-bold tracking-[0.1em]
                  hover:bg-rose-500 focus:bg-rose-600
                  text-white px-3 py-2 text-base text-black my-2"
              >
                Confirmar sua presença
              </button>
            }
          </div>
        </div>
        :
        <div className="w-full h-[55vh] mt-12">
          <div className="flex flex-col items-center mt-12 mb-2">
            <p className="text-[32px] text-gray-700 font-thin w-[80vw] text-center" style={{ fontFamily: 'Sail, serif' }}>
              Confirmado sua presença!
            </p>
          </div>
          <div className="flex flex-col items-center mt-2 mb-8">
            <p className="text-gray-700 text-center mb-2 text-[22px] w-[80vw] text-center" style={{ fontFamily: 'Kalam, cursive' }}>
              Obrigado por confirmar sua presença! Em breve, enviaremos mais informações.
            </p>
            <button
              type="button"
              style={{ fontFamily: 'Comfortaa, sans-serif' }}
              onClick={() => setModal(true)}
              className="
                rounded-md bg-rose-400 font-bold
                hover:bg-rose-500 focus:bg-rose-600
                text-white px-3 py-2 text-base text-black my-2"
            >
              Salve na sua agenda
            </button>
          </div>
        </div>
      }
      <div className="w-full mt-[-80px]">
        <img
          className="w-full object-cover object-center"
          style={{}}
          src="/flowers-bot.png"
          alt="capa"
        />
      </div>
    </div>
  );
}