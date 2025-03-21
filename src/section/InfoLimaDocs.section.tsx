import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

export const InfoLimaDocsSection = () => {
    // Estado para rastrear los paneles abiertos
    const [activeKeys, setActiveKeys] = useState<string[]>([]);

    // Función que actualiza el estado cuando cambia el Collapse
    const handleCollapseChange = (keys: string | string[]) => {
        setActiveKeys(Array.isArray(keys) ? keys : [keys]);
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: (
                <div className="group text-black font-medium font-apercu-medium uppercase flex justify-between md:justify-center gap-2 sm:gap-4 px-4 items-center py-2 sm:py-4 text-xl sm:text-3xl">
                    EL CINE DE LO REAL EN SUS VARIACIONES INFINITAS
                    <img
                        src="/flecha-icon.png"
                        alt="flecha"
                        className={`w-6 sm:w-8 group-hover:animate-shake group-hover:animate-infinite transition-transform duration-300 ${activeKeys.includes('1') ? 'rotate-90' : ''}`}
                    />
                </div>
            ),
            children: (
                <div className="container mx-auto p-10 flex flex-col gap-4 font-apercu-mono text-lg">
                    <p>LIMADOCS es un lugar para el cine documental como fuente inagotable de gozo, deleite y asombro. “Documental” como fábula del mundo, tan necesaria como una y otra vez desconocida, imprevisible e inesperada.</p>
                    <p>El festival nace por tanto del compromiso estético con los más de cien años de exploraciones audiovisuales, es decir, nace de la pulsión por la aventura y por los deseos más íntimos, lo mismo si son personales o colectivos. El festival se cimenta sobre el atrevimiento técnico, la fecunda sensibilidad, el rigor, la frescura y soltura, y sobre la toma (o la invención) de recursos y de licencias al encuentro del ángulo inadvertido, insospechado. Al encuentro de lo que aún no hemos visto o “no habíamos visto así”, o al encuentro de aquello que acaso no debimos dejar de ver…</p>
                    <p>Lo fascinante de una película no radica en poner en escena tal o cual contenido, sino en cómo lo hace. Cómo pone a expresar lo colectivo o lo personal, lo conocido o lo remoto, una celebración o una denuncia, una urgencia o la calma. A través del cine documental se pueden vislumbrar las verdaderas posibilidades de la existencia. Agradecemos mucho ver películas que nos agarren desprevenidos, algo que cada vez es más difícil, cuando lo que se ha sido instalado (y reina) es de un aburrimiento infinito y aplastante.</p>
                    <p>El festival es una cita entonces para descubrir generosas películas realizadas por cineastas y equipos de trabajo visionarios, desde directores icónicos y colectivos memorables hasta autores y grupos emergentes.</p>
                </div>
            ),
            style: { borderTop: '1px solid #191718' },
            styles: {
                body: {
                    backgroundColor: '#f5f375',
                },
            },
        },
        {
            key: '2',
            label: (
                <div className="group text-black font-medium font-apercu-medium uppercase flex justify-between md:justify-center gap-2 sm:gap-4 px-4 items-center py-2 sm:py-4 text-xl sm:text-3xl">
                    UNA CITA EN LOS MEJORES CINES ALTERNATIVOS DE LIMA
                    <img
                        src="/flecha-icon.png"
                        alt="flecha"
                        className={`w-6 sm:w-8 group-hover:animate-shake group-hover:animate-infinite transition-transform duration-300 ${activeKeys.includes('2') ? 'rotate-90' : ''}`}
                    />
                </div>
            ),
            children: (
                <div className="container mx-auto p-10 flex flex-col gap-4 font-apercu-mono text-lg">
                    <p>Ir al cine siempre fue y hoy más que nunca es "algo especial", popular e históricamente siempre fue “una salida”. Emergemos de la sala oscura absortos, reflexivos, como despertando de un sueño que verdaderamente removió y desordenó no se sabe qué puntos neuronales. Es un sentir común: la efectiva potencia de una película se mide en la sala de cine, es una cuestión de escala. La pantalla grande irradia, devuelve a la película incluso su espesor, la salva de una degradación. Las narrativas incluso documentales suelen contarnos las aventuras (o desventuras) de un héroe, a veces es un héroe colectivo o un antihéroe, es lo mismo. Lo verdaderamente nuevo es que con el avance de las plataformas el héroe ya pasó a estar del otro lado de la pantalla grande: inmerso en la oscuridad de una sala de cine el héroe es el espectador.</p>
                </div>
            ),
            style: { borderTop: '1px solid #191718' },
            styles: {
                body: {
                    backgroundColor: '#f5f375',
                },
            },
        },
        {
            key: '3',
            label: (
                <div className="group text-black font-medium font-apercu-medium uppercase flex justify-between md:justify-center gap-2 sm:gap-4 px-4 items-center py-2 sm:py-4 text-xl sm:text-3xl">
                    UNA DEDICATORIA
                    <img
                        src="/flecha-icon.png"
                        alt="flecha"
                        className={`w-6 sm:w-8 group-hover:animate-shake group-hover:animate-infinite transition-transform duration-300 ${activeKeys.includes('3') ? 'rotate-90' : ''}`}
                    />
                </div>
            ),
            children: (
                <div className="container mx-auto p-10 flex flex-col gap-4 font-apercu-mono text-lg">
                    <p>A Marianne Eyde, fallecida el 7 de junio de 2022, y a Heddy Honigmann, fallecida el 21 de mayo de 2022, cuando rondaban los 70 años. Ambas cineastas peruanas muy queridas. Reconocidas por sus documentales en el mundo entero.</p>
                </div>
            ),
            style: { borderTop: '1px solid #191718' },
            styles: {
                body: {
                    backgroundColor: '#f5f375',
                },
            },
        },
    ];

    return (
        <section className="bg-custom-yellow2 font-apercu-medium font-medium">
            <h2 className="text-black font-medium text-4xl sm:text-6xl uppercase text-center py-4 sm:py-8">QUÉ ES LIMADOCS</h2>
            <Collapse
                expandIcon={() => null}
                items={items}
                bordered={true}
                onChange={handleCollapseChange} // Evento para detectar cambios
                activeKey={activeKeys} // Sincroniza el estado con el componente
            />
        </section>
    );
};