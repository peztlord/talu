import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
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
    msg: string;
    presence?: boolean;
};

export default function Liste() {

    const [guestList, setGuestList] = useState<Guest[]>([]);
    const [idSelect, setIdSelect] = useState(0);
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    const getWhatsAppUrl = () => {
    // Se não tiver telefone, retorna string vazia
    if (!phone) return '#';

    // 1. Limpa o telefone (deixa apenas números)
    const cleanPhone = phone.replace(/\D/g, '');
    // Adiciona o DDI do Brasil (55) se não tiver
    const fullPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

    // 2. A mensagem formatada
    const text = `*Convite de Casamento*

Com muita alegria, convidamos você para celebrar conosco este momento tão especial s2

ID do convite: *${idSelect}*

Data: *12.02.2026*
Horário: *15h30*
Local: *Brasília - DF*

Para melhor organização, pedimos a gentileza de *confirmar sua presença* pelo link abaixo até o dia *23 de Dezembro*:
https://www.talusavedate.site/

Será uma honra contar com a sua presença !!

Com carinho,
*Tatiane e Luciano*`;

    return window.open(`https://wa.me/${fullPhone}?text=${encodeURIComponent(text)}`, "_blank");
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
            <table className="text-sm text-left text-gray-600">
                <thead className="text-gray-70 bg-gray-100 border-b border-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nome</th>
                        <th scope="col" className="px-6 py-3 text-center">Presença</th>
                        <th scope="col" className="px-6 py-3 text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map((guest) => (
                        <tr
                            key={guest.id}
                            className="bg-white border-b transition-colors"
                        >
                            <td className="px-6 py-4 text-gray-800">
                                <p className="text-base">{guest.name}</p>
                                <p className="text-sm">id: {guest.id}</p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {guest.presence === true && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Confirmado
                                    </span>
                                )}
                                {guest.presence === false && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Recusado
                                    </span>
                                )}
                                {guest.presence === null && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-yellow-800">
                                        Pendente
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-800">
                                {!guest.presence === true && (
                                    <button
                                        type="button"
                                        className="rounded px-2 py-1 bg-green-500 text-white"
                                        onClick={() => (
                                            setIdSelect(guest.id),
                                            setModal(true)
                                        )}
                                    >
                                        enviar
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
                {modal &&
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <div className="bg-white shadow-2xl px-4 py-4 w-[80%]">
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 text-sm">Telefone</label>
                                <span
                                    className="text-gray-800 text-base"
                                    onClick={() => setModal(false)}
                                >
                                    x
                                </span>
                            </div>
                                <input
                                    type="phone"
                                    placeholder="ex: 61936195352"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    style={{ fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
                                    className="
                                    border border-gray-200 bg-white
                                    px-3 py-2 text-base my-3 text-gray-600
                                    placeholder:text-gray-400 w-full"
                                />
                                <button
                                    className="bg-green-600 tracking-[0.08em] text-white w-full py-2 my-2"
                                    style={{ fontFamily: 'Abel, serif' }}
                                    onClick={() => getWhatsAppUrl()}
                                >
                                    disparar convite
                                </button>
                        </div>
                    </div>
                }
            </table>
    );
}