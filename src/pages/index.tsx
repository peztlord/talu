import React, { useState, useCallback, useEffect } from 'react';
import { supabase } from '../services/supabase';
import '@fontsource/zen-kaku-gothic-new';
import '@fontsource/abhaya-libre';
import '@fontsource/pinyon-script';
import '@fontsource/abel';
import '@fontsource/prata';
import '@fontsource-variable/bodoni-moda';

type Guest = {
    id: number;
    name: string;
    location: string;
    address: string;
    cep: string;
    presence?: boolean;
};

export default function Home() {

    const [guestList, setGuestList] = useState<Guest[]>([]);
    const [selectedItem, setSelectedItem] = useState<Guest | null>(null);
    const [showCep, setShowCep] = useState(false);
    const [id, setId] = useState("");
    const [address, setAdress] = useState("");
    const [cep, setCep] = useState("");
    const [msg, setMsg] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; // Removi o toUpperCase() temporariamente se for número
        setId(value);

        // FIX: Converta item.id para String() na comparação
        const exists = guestList.some((item) => String(item.id) === value);
        setShowCep(exists);

        const foundItem = guestList.find((item) => String(item.id) === value);
        setSelectedItem(foundItem ?? null);
    };

    const handleConfirmPresence = async () => {
        if (!selectedItem) return;
        try {
            const { error } = await supabase
                .from('list')
                .update({
                    address: address,
                    cep: cep,
                    msg: msg,
                    presence: true
                })
                .eq('id', selectedItem.id);

            if (error) throw error;
            window.location.href = '/obrigado';
        } catch (error) {
            alert('Erro ao confirmar. Tente novamente.');
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const { data, error } = await supabase
                    .from('list')
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
            <div
                className={`flex w-full h-[100vh] justify-center items-center`}
                style={{
                    backgroundImage: "url(" + "/bg2.jpg" + ")",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backgroundBlendMode: "lighten",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {!confirm ?
                    <div className="flex flex-col bg-white w-[65vw] h-auto justify-center items-center shadow-2xl">
                        <div className="flex justify-center items-center mt-4">
                            <p className="text-[1.6em] mx-2 tracking-[0.04em] text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                                Save
                            </p>
                            <p className="text-[1.8em] mx-2 tracking-[0.04em] text-gray-800" style={{ fontFamily: 'Pinyon Script, serif' }}>
                                The
                            </p>
                            <p className="text-[1.6em] mx-2 tracking-[0.04em] text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                                Date
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[1em] my-3">
                            <div
                                className="w-[210px] h-[100px] bg-gray-800"
                                style={{
                                    position: "relative",
                                    backgroundImage: "url(" + "/talu1.jpeg" + ")",
                                    backgroundSize: "cover",
                                    backgroundPosition: "start center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    backgroundBlendMode: "darken",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "84%",
                                        transform: "translateX(-50%)",
                                        bottom: "-10px",
                                        color: "#fff",
                                        // fontFamily: "'Bodoni Moda', serif",
                                        fontFamily: "'Prata', serif",
                                        fontSize: "4rem",
                                        fontWeight: "700",
                                        lineHeight: "0.8",
                                        zIndex: "2",
                                    }}
                                >
                                    12
                                </span>
                            </div>
                            <div
                                className="w-[210px] h-[100px] bg-gray-800"
                                style={{
                                    position: "relative",
                                    backgroundImage: "url(" + "/talu2.jpeg" + ")",
                                    backgroundSize: "cover",
                                    backgroundPosition: "start center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    backgroundBlendMode: "darken",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "80%",
                                        transform: "translateX(-50%)",
                                        bottom: "-10px",
                                        color: "#fff",
                                        fontFamily: "'Prata', serif",
                                        fontSize: "4rem",
                                        fontWeight: "900",
                                        lineHeight: "0.8",
                                        zIndex: "2",
                                    }}
                                >
                                    02
                                </span>
                            </div>
                            <div
                                className="w-[210px] h-[100px] bg-gray-800"
                                style={{
                                    position: "relative",
                                    backgroundImage: "url(" + "/talu3.jpeg" + ")",
                                    backgroundSize: "cover",
                                    backgroundPosition: "start center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    backgroundBlendMode: "darken",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "80%",
                                        transform: "translateX(-50%)",
                                        bottom: "-10px",
                                        color: "#fff",
                                        fontFamily: "'Prata', serif",
                                        fontSize: "4rem",
                                        fontWeight: "900",
                                        lineHeight: "0.8",
                                        zIndex: "2",
                                    }}
                                >
                                    26
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-2">
                            {/* <p className="text-[1.4em] tracking-[0.15em] text-gray-600" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                                TATIANE & LUCIANO
                            </p> */}
                            <p className="text-[1.4em] tracking-[0.15em] text-gray-600  mb-[-8px]" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                                TATIANE &
                            </p>
                            <p className="text-[1.4em] tracking-[0.15em] text-gray-600" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                                LUCIANO
                            </p>
                            <p className="text-[1em] my-2 text-gray-800" style={{ fontFamily: 'Abel, serif' }}>
                                te convidam  para celebrar o amor
                            </p>
                            <p className="text-[1em] tracking-[0.08em] text-gray-800" style={{ fontFamily: 'Abel, serif' }}>
                                às 15:30h | Brasília - DF
                            </p>
                        </div>
                        <button
                            className="bg-gray-800 tracking-[0.08em] text-white px-6 py-2 mb-5"
                            style={{ fontFamily: 'Abel, serif' }}
                            onClick={() => setConfirm(true)}
                        >
                            confirmar presença
                        </button>
                    </div>
                    :
                    <div className="flex flex-col bg-white w-[65vw] h-auto justify-center items-center p-6 shadow-2xl">
                        {selectedItem ? 
                            <p
                                className="text-[1em] tracking-[0.15em] text-gray-600"
                                style={{ fontFamily: 'Prata, serif' }}
                            >
                                {selectedItem.name}
                            </p>
                            :
                            <img
                              className="w-12 object-cover object-top"
                              src="/icon-list.png"
                              alt="icon-tanks"
                            />
                        }
                        <label className="w-full text-gray-700 mt-3 mb-1 text-sm">ID</label>
                        <input
                            type="text"
                            placeholder="digite seu id de convite"
                            value={id}
                            onChange={handleChange}
                            disabled={loading}
                            style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                            className="
                            border border-gray-200 bg-white
                            px-3 py-2 text-base mb-3 text-gray-600
                            placeholder:text-gray-400 w-full"
                        />
                        {showCep &&
                            <>
                                <label className="w-full text-gray-700 mt-3 mb-1 text-sm">Endereço</label>
                                <input
                                    type="text"
                                    placeholder="digite seu endereço completo"
                                    value={address}
                                    onChange={(e) => setAdress(e.target.value)}
                                    style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                                    className="
                                    border border-gray-200 bg-white
                                    px-3 py-2 text-base mb-3 text-gray-600
                                    placeholder:text-gray-400 w-full"
                                />
                                <label className="w-full text-gray-700 mt-3 mb-1 text-sm">CEP</label>
                                <input
                                    type="number"
                                    placeholder="digite seu CEP"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                                    className="
                                    border border-gray-200 bg-white
                                    px-3 py-2 text-base mb-3 text-gray-600
                                    placeholder:text-gray-400 w-full"
                                />
                                <label className="w-full text-gray-700 mt-3 mb-1 text-sm">Recadinho</label>
                                <textarea
                                    placeholder="deixei uma mensagem para os noivos"
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                                    className="
                                    border border-gray-200 bg-white h-32
                                    px-3 py-2 text-base mb-3 text-gray-600
                                    placeholder:text-gray-400 w-full"
                                />
                                <button
                                    className="bg-gray-900 tracking-[0.08em] text-white w-full py-2 my-4"
                                    style={{ fontFamily: 'Abel, serif' }}
                                    onClick={() => handleConfirmPresence()}
                                >
                                    confirmar
                                </button>
                            </>
                        }
                    </div>
                }
            </div>
    );
}