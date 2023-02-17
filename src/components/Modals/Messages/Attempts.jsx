import * as React from 'react';

// Styles
import style from './Messages.module.css'

// Modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Material Icons
import CloseIcon from '@mui/icons-material/Close';

// Images
import heart from '../../../assets/heart.svg'
import sad from '../../../assets/sadFace.svg'

const styleModal = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: '100%',
     maxWidth: 1300,
     maxHeight: 600,
     p: 4,
     overflowY: 'auto'
};

export default function Attepts({initial}) {

     const [open, setOpen] = React.useState(initial);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div style={{ width: "100%" }}>
               {/* <button onClick={handleOpen} className='btn btn__bordo'>Intentos test</button> */}
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={styleModal}>

                         {/* Cuando todavia te quedan intentos */}

                         <div
                              className={style.message__body}
                         >
                              <CloseIcon className={style.message__close} onClick={handleClose} />
                              <div className={style.message__icons}>
                                   <img src={heart} alt="" />
                              </div>
                              <div className={style.message__title}>
                                   <h2>Aun tienes 3 intentos para ganar el juego</h2>
                              </div>
                              <div className={style.message__text}>
                                   <p>Vamos a seguir jugando</p>
                              </div>
                              <button
                                   className='btn btn__bordo'
                              >
                                   JUGAR
                              </button>
                         </div>

                         {/* Cuando ya no te quedan intentos */}

                         {/* <div
                              className={style.message__body}
                         >
                              <CloseIcon className={style.message__close} onClick={handleClose} />
                              <div className={style.message__icons}>
                                   <img src={sad} alt="" />
                              </div>
                              <div className={style.message__title}>
                                   <h2>¡Ups!</h2>
                              </div>
                              <div className={style.message__text}>
                                   <p>Ya no te quedan intentos. Próximamente tendrás mas novedades.</p>
                              </div>
                              <button
                                   className='btn btn__bordo'
                              >
                                   CERRAR
                              </button>
                         </div> */}
                    </Box>
               </Modal>
          </div>
     );
}