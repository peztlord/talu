import React, { useState, useCallback, useEffect } from 'react';
import { supabase } from '../services/supabase';
import '@fontsource/lancelot/400.css'
import '@fontsource/sail/400.css'
import '@fontsource/playball/400.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/monsieur-la-doulaise/400.css'
import '@fontsource/zen-kaku-gothic-new';
import '@fontsource/kalam';
import '@fontsource/sue-ellen-francisco';

type Guest = {
  id: number;
  name: string;
  location: string;
  address: string;
  cep: string;
  presence?: boolean;
};

export default function Home() {

  const [name, setName] = useState('');
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [selectedItem, setSelectedItem] = useState<Guest | null>(null);
  const [showCep, setShowCep] = useState(false);
  const [cep, setCep] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Removi o toUpperCase() temporariamente se for número
    setName(value);

    // FIX: Converta item.id para String() na comparação
    const exists = guestList.some((item) => String(item.id) === value);
    setShowCep(exists);

    const foundItem = guestList.find((item) => String(item.id) === value);
    setSelectedItem(foundItem ?? null);
  };

  const handleConfirmPresence = async () => {
    if (!selectedItem) return;

    try {
      // Atualiza o banco de dados com o CEP e marca como confirmado
      const { error } = await supabase
        .from('convidados')
        .update({ 
            cep: cep,
            confirmed: true // Se tiver uma coluna booleana de confirmação
        })
        .eq('id', selectedItem.id);

      if (error) throw error;

      setModal(true); // Só abre o modal se salvar com sucesso
    } catch (error) {
      alert('Erro ao confirmar. Tente novamente.');
      console.error(error);
    }
  };

  const handleAddToCalendar = useCallback(() => {
    const title = "Casamento - Tatiane e Luciano";
    const description = "Celebração do casamento de Tatiane e Luciano, um dia especial repleto de momentos inesquecíveis.";
    const location = "Brasilia, DF, Brasil";

    // Data do evento (12/02/2026 às 15:30h UTC até 20h UTC)
    const startDate = "20260212T153000Z";
    const endDate = "20260212T210000Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;

    // abre o link do Google Calendar
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        // Substitua 'convidados' pelo nome real da sua tabela no Supabase
        const { data, error } = await supabase
          .from('guest-list')
          .select('*');

        if (error) throw error;

        if (data) {
          setGuestList(data);
        }
      } catch (error) {
        console.error('Erro ao buscar convidados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#fcf9f6ff' }}>
      <div className={`flex flex-col w-full justify-start items-center ${!modal && 'h-[100vh]'}`}>
        <img
          className="w-full object-cover object-top"
          style={{}}
          src="/flowers-top.png"
          alt="capa"
        />
        {!modal &&
          <>
            <img
              className="w-[30vh] h-[30vh] object-cover object-top rounded-full mb-12 mt-[-5vh]"
              style={{}}
              src="/capa.webp"
              alt="capa"
            />
            <div className="flex items-center mt-[-4vh]">
              <h1 className="text-[3.8em] mx-2 mb-8 tracking-[0.04em] text-gray-800" style={{ fontFamily: 'Sail, serif' }}>
                Save
              </h1>
              <h1 className="text-[3.6em] mx-2 text-gray-700" style={{ fontFamily: 'Monsieur La Doulaise, cursive' }}>
                the
              </h1>
              <h1 className="text-[3.8em] mx-2 mt-8 tracking-[0.04em] text-gray-800" style={{ fontFamily: 'Sail, serif' }}>
                Date
              </h1>
            </div>
            <h2 className="text-[1.4em] font-bold mt-6 tracking-[0.2em] text-gray-800" style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}>
              Tatiane & Luciano
            </h2>
            <p className="text-[1.2em] tracking-[0.3em] text-gray-800" style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}>are getting married</p>
            <div
              className="flex text-[1.4em] mt-6 font-bold tracking-[0.2em] gap-4 items-center text-gray-800"
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
            {/* <div className="w-full mt-16">
              <img
                className="w-full object-cover object-center"
                style={{}}
                src="/flowers-mid.png"
                alt="divisor"
              />
            </div> */}
          </>
        }
      </div>
      {(!modal) ?
        <div className="w-full px-16">
          <div
            className="
              flex flex-col items-centertext-gray-800 mb-4 text-[22px] gap-6
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
              Contamos com a sua confirmação de presença preenchendo os dados abaixo até o dia <b className="tracking-[0.2em] ml-2">20/12/25</b>:
            </p>
          </div>
          <div className="flex flex-col mt-12 mb-22">
            {loading && <p className="text-center text-gray-400">Carregando lista de convidados...</p>}

            {selectedItem && (
              <div className="flex flex-col items-center">
                <p
                  className="font-bold text-gray-600 mb-2 text-[22px] text-center tracking-[0.2em]"
                  style={{ fontFamily: 'Sail, serif' }}
                >
                  {selectedItem.name}
                </p>
                <hr className="w-[80%] text-gray-300 mb-6" />
              </div>
            )}
            <input
              className="
                border border-rose-100 rounded-md bg-white
                px-3 py-2 text-base my-2 text-gray-600
                placeholder:text-gray-400"
              placeholder="Digite seu código"
              style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
              type="text"
              value={name}
              onChange={handleChange}
              disabled={loading}
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
                  placeholder:text-gray-400"
              />
            }
            {cep.length == 8 &&
              <button
                type="button"
                onClick={handleConfirmPresence}
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
              onClick={() => handleAddToCalendar()}
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