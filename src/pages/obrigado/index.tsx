import React, { useCallback } from 'react';
import '@fontsource/zen-kaku-gothic-new';
import '@fontsource/abhaya-libre';
import '@fontsource/pinyon-script';
import '@fontsource/abel';
import '@fontsource/prata';
import '@fontsource-variable/bodoni-moda';

export default function Obrigado() {
    const handleAddToCalendar = useCallback(() => {
        const title = "Casamento - Tatiane e Luciano";
        const description = "Celebração do casamento de Tatiane e Luciano, um dia especial repleto de momentos inesquecíveis.";
        const location = "Brasilia, DF, Brasil";

        const startDate = "20260212T153000Z";
        const endDate = "20260212T210000Z";

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            title
        )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
            description
        )}&location=${encodeURIComponent(location)}`;

        window.open(url, "_blank");
    }, []);

    return (
        <div
            className={`flex flex-col w-full h-[100vh] justify-center items-center`}
            style={{
                backgroundImage: "url(" + "/bg2.jpg" + ")",
                backgroundColor: "rgba(255,255,255,0.2)",
                backgroundBlendMode: "lighten",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col bg-white w-[65vw] h-auto justify-center items-center p-6 shadow-2xl">
                <img
                    className="w-16 object-cover object-top mb-4"
                    src="/icon-tanks.png"
                    alt="icon-tanks"
                />
                <p
                    className="text-gray-700 text-center mb-2 text-[18px] text-center"
                    style={{ fontFamily: 'Abel, serif' }}
                >
                    Obrigado por confirmar sua presença!
                </p>
                <button
                    type="button"
                    onClick={() => handleAddToCalendar()}
                    className="bg-gray-800 tracking-[0.08em] text-white px-6 py-2 mt-4"
                    style={{ fontFamily: 'Abel, serif' }}
                >
                    salve na sua agenda
                </button>
            </div>
        </div>
    );
}