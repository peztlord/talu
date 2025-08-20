import React, { useState } from 'react';
import '@fontsource/lancelot/400.css'
import '@fontsource/sail/400.css'
import '@fontsource/playball/400.css'
import '@fontsource/comfortaa/400.css'

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

  const [ name, setName ] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showCep, setShowCep] = useState(false);
  const [cep, setCep] = useState("");
  const [ modal, setModal ] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    // verifica se existe id na lista
    const exists = items.some((item) => item.id === value);
    setShowCep(exists);

    const foundItem = items.find((item) => item.id === value);
    setSelectedItem(foundItem ?? null);
  };

  // const [ name, setName ] = useState('');
  // const [ cep, setCep ] = useState('');
  // const [ modal, setModal ] = useState(false);

  // const listNames = [{id:'1001', nome:'Luciano ferraz'},{id:'1002', nome:'Tatiane ormond'}]

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#fcf9f6ff'}}>
      <div className="relative w-full">
        <img
          className="w-full h-[55vh] object-cover object-top"
          style={{ filter: 'brightness(40%)'}}
          src="/capa.webp"
          alt="capa"
        />
        <div className="absolute flex flex-col items-center mt-8 mb-2 w-full" style={{top: '20vh',}}>
          {modal ?
            <h1 className="text-[44px] font-roboto text-white" style={{ fontFamily: 'Sail, serif' }}>
              Tatiane & Luciano
            </h1>
            :
            <h1 className="text-[52px] font-roboto text-white" style={{ fontFamily: 'Sail, serif' }}>
              Save the Date
            </h1>
          }
          <p className="text-[24px] font-bold text-white" style={{ fontFamily: 'Playball, serif' }}>
            - -- 12 . 02 . 2026 -- -
          </p>
        </div>
      </div>
      {(!modal) ?
      <div className="flex w-full"> 
        <div className="w-[55vw] mr-4 p-4">
          <div className="flex flex-col items-center mt-8">
            <p className="text-gray-700 mb-4 text-[22px]" style={{ fontFamily: 'Playball, serif' }}>
              É com imensa alegria que enviamos este convite de confirmação para o nosso grande dia!
            </p>
            <p className="text-gray-700 mb-4 text-[22px]" style={{ fontFamily: 'Playball, serif' }}>
              Planejamos uma cerimônia intimista e, por isso, selecionamos com carinho cada pessoa 
              especial que desejamos ter ao nosso lado nesse momento único.
            </p>
            <p className="text-gray-700 mb-4 text-[22px]" style={{ fontFamily: 'Playball, serif' }}>
              Contamos com a sua confirmação de presença preenchendo os dados abaixo até o dia 31/08:
            </p>
          </div>
          <div className="flex flex-col mt-2 mb-32">
            {selectedItem && (
              <p className="text-lg text-gray-700 mb-2 text-[24px]" style={{ fontFamily: 'Playball, sans-serif' }}>
                {selectedItem.name}
              </p>
            )}
            <input
              className="
                border border-gray-400 rounded-md bg-white
                px-3 py-2 text-base text-black my-2
                focus:border-gray-500  placeholder:text-gray-500"
              placeholder="Digite seu código"
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
                className="
                  border border-gray-400 rounded-md bg-white
                  px-3 py-2 text-base text-black my-2
                  focus:border-gray-500 placeholder:text-gray-500"
              />
            }
            {cep.length == 8 &&
              <button
                type="button"
                style={{ fontFamily: 'Comfortaa, sans-serif' }}
                onClick={() => setModal(true)}
                className="
                  rounded-md bg-rose-400 font-bold
                  hover:bg-rose-500 focus:bg-rose-600
                  text-white px-3 py-2 text-base text-black my-2"
              >
                Confirmar sua presença
              </button>
            }
          </div>
        </div>
        <div
          className="w-[45vw] m-0 p-0"
          style={{ 
            background: 'url(/bg.png)',
            objectFit: 'cover',
            objectPosition: 'start'
          }}
          >
        </div>
      </div>
      :
      <div className="w-full">
        <div className="flex flex-col items-center mt-12 mb-2">
          <p className="text-[28px] text-gray-700 font-thin w-[80vw] text-center" style={{ fontFamily: 'Playball, sans-serif' }}>
            Confirmado sua presença!
          </p>
        </div>
        <div className="flex flex-col items-center mt-2 mb-8">
          <p className="text-gray-700 text-center mb-2 text-[22px] w-[80vw] text-center" style={{ fontFamily: 'Playball, serif' }}>
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
    </div>
  );
}