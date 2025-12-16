import React, { useState, useCallback, useEffect } from 'react';
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
    presence?: boolean;
};

export default function Liste() {

    const [guestList, setGuestList] = useState<Guest[]>([]);
    const [loading, setLoading] = useState(true);

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
        <div className="flex flex-col items-center">
        </div>
    );
}