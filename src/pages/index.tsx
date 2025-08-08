import React, { useState } from 'react';
import '@fontsource/lancelot/400.css'
import '@fontsource/sail/400.css'
import '@fontsource/playball/400.css'
import '@fontsource/comfortaa/400.css'

export default function Home() {

  const [ name, setName ] = useState('');
  const [ cep, setCep ] = useState('');
  const [ modal, setModal ] = useState(false);

  const listNames = ['luciano ferraz','tatiane ormond']

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <img
          className="w-full h-[60vh] object-cover object-top"
          src="/capa.webp"
          alt="capa"
        />
        <div className="absolute bottom-0 left-0 w-full h-42 bg-gradient-to-t from-white to-transparent" />
      </div>
      {(!modal) ? 
      <>
        <div className="flex flex-col items-center mt-8 mb-2">
          <h1 className="text-[48px] font-roboto" style={{ fontFamily: 'Sail, serif' }}>
            Save to Date
          </h1>
          <p className="text-[22px] font-thin" style={{ fontFamily: 'Playball, serif' }}>
            12 . 02 . 2026
          </p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="w-[65vw] text-center mb-2" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            É com grande satisfação que lhe enviamos esse convite de confirmação para nosso grande dia! 
            Planejamos uma cerimonia intimista, então escolhemos a dedo as pessoas especias que queremos 
            ao nosso lado.
          </p>
          <img
            className="w-auto h-[40px] object-center my-4"
            src="/divisoria.webp"
            alt="divisoria"
          />
          <p className="w-[65vw] text-start mt-4" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            Esperamos que confirme sua presença inserindo os dados a abaixo <b>até o dia 20/08/2025:</b>
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 mb-32">
          <input
            className="
              w-[65vw] border border-gray-400 rounded-md bg-white
              px-3 py-2 text-base text-black my-2
              focus:border-gray-500  placeholder:text-gray-500"
            placeholder="Seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {listNames.includes(name) &&
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
          <h1 className="text-[42px] font-roboto mb-2" style={{ fontFamily: 'Sail, serif' }}>
            Tatiane & Luciano
          </h1>
          <p className="text-[22px] font-thin" style={{ fontFamily: 'Playball, serif' }}>
            12 . 02 . 2026
          </p>
        </div>
         <div className="flex flex-col items-center mt-4">
          <p className="w-[65vw] text-center mb-2" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            Obrigado por confirmar sua prenseça, em breve enviaremos mais inforamções!
          </p>
        </div>
      </>
      }
    </div>
  );
}