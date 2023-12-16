import page1 from './images/1.jpg';
import page2 from './images/2.jpg';
import page2footer from './images/2-footer.jpg';
import page31 from './images/3-1.jpg';
import page32 from './images/3-2.jpg';
import page3Confirm from './images/3-confirm.jpg';
import { useState, useEffect } from 'react';

export const GifExpertApp = () => {

    const [imagenesCargadas, setImagenesCargadas] = useState(false);

    const imagenes = [
        page1,
        page2,
        page2footer,
        page31,
        page32,
        page3Confirm,
    ]; // Agrega otras imágenes aquí según sea necesario


    useEffect(() => {
        const cargarTodasLasImagenes = () => {
            const promesasCarga = imagenes.map((imagen) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = imagen;
                });
            });

            Promise.all(promesasCarga)
                .then(() => {
                    // Todas las imágenes se han cargado con éxito
                    setImagenesCargadas(true);
                })
                .catch((error) => {
                    // Al menos una imagen falló al cargar
                    console.error('Error al cargar las imágenes:', error);
                });
        };

        cargarTodasLasImagenes();
    }, []);


    const numeroTelefono = '+5491144360229';
    const mensaje = '¡Hola! Quiero confirmar mi asistencia';
    const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;



    return (
        <>
            {imagenesCargadas ? (
                <div style={{ width: '100%', maxWidth: 700 }} className='mx-auto'>
                    <div style={{ position: 'relative' }}>
                        <img src={page1} alt="" />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={page2} alt="" />
                        <div className='position-relative bg-transparent' style={{
                            bottom: 54
                        }}>
                            <p className='text-right m-0 bg-transparent'>
                                <button style={{
                                    position: 'relative',
                                    width: '45%',
                                    height: '50px',
                                    opacity: 0
                                }} className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Ver mapa
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className='ndBlock'>
                        <div style={{ position: 'relative' }}>
                            <img src={page2footer} alt="" />
                        </div>
                        <div>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.50529295280765!2d-58.72692891336552!3d-34.50073723820536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca2a3475c9bdd%3A0x3afb7976fc2ff753!2sOasis%20Cooper%20Eventos!5e0!3m2!1sen!2sar!4v1702679616660!5m2!1sen!2sar" width="600" height="450" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src={page31} alt="" />
                        </div>
                        <div className='w-100 text-center' style={{}}>
                            <a style={{ opacity: 1, display: 'block' }} className="custombtn" href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
                                <img src={page3Confirm} alt="" />
                            </a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src={page32} alt="" />
                        </div>
                    </div>
                </div>
            ) : (
                // Mostrar un indicador de carga mientras se cargan las imágenes
                <p className='text-center'>Cargando...</p>
            )}
        </>
    )
}
