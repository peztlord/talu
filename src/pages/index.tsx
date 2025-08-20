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
    <div className="flex flex-col items-center bg-white">
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
          <p className="text-[24px] font-thin text-white" style={{ fontFamily: 'Playball, serif' }}>
            12 . 02 . 2026
          </p>
        </div>
      </div>
      {(!modal) ? 
      <>
        <div className="flex flex-col items-center mt-8">
          <p className="w-[65vw] text-gray-700 text-center mb-2" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            É com imensa alegria que enviamos este convite de confirmação para o nosso grande dia!
            Planejamos uma cerimônia intimista e, por isso, selecionamos com carinho cada pessoa 
            especial que desejamos ter ao nosso lado nesse momento único.
          </p>
          <img
            className="w-auto h-[40px] object-center my-4"
            src="/divisoria.webp"
            alt="divisoria"
          />
          <p className="w-[65vw] text-gray-700 text-center mt-4" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            Contamos com a sua confirmação de presença preenchendo os dados abaixo até o dia <b>20/08/2025:</b>
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 mb-32">
          {selectedItem && (
            <p className="text-lg font-semibold text-gray-700 mt-4 mb-2" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
              {selectedItem.name}
            </p>
          )}
          <input
            className="
              w-[65vw] border border-gray-400 rounded-md bg-white
              px-3 py-2 text-base text-black my-2
              focus:border-gray-500  placeholder:text-gray-500"
            placeholder="Digite seu código"
            type="text"
            value={name}
            onChange={handleChange}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          {showCep &&
            <input
              type="text"
              placeholder="Seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="
                w-[65vw] border border-gray-400 rounded-md bg-white
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
                w-[65vw] rounded-md bg-green-400 font-bold
                hover:bg-green-500 focus:bg-green-600
                text-white px-3 py-2 text-base text-black my-2"
            >
              Confirmar sua presença
            </button>
          }
        </div>
      </>
      :
      <>
        <div className="flex flex-col items-center mt-8 mb-2">
          {/* <h1 className="text-[42px] text-gray-700 font-roboto mb-2" style={{ fontFamily: 'Sail, serif' }}>
            Tatiane & Luciano
          </h1> */}
          <p className="text-[22px] text-gray-700 font-thin">
            Confirmado sua presença!
          </p>
        </div>
         <div className="flex flex-col items-center mt-2 mb-8">
          <p className="w-[65vw] text-gray-700 text-center mb-2" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            Obrigado por confirmar sua presença! Em breve, enviaremos mais informações.
          </p>
          <button
              type="button"
              style={{ fontFamily: 'Comfortaa, sans-serif' }}
              onClick={() => setModal(true)}
              className="
                w-[65vw] rounded-md bg-green-400 font-bold
                hover:bg-green-500 focus:bg-green-600
                text-white px-3 py-2 text-base text-black my-2"
            >
              Salve na sua agenda
            </button>
        </div>
      </>
      }
    </div>
  );
}