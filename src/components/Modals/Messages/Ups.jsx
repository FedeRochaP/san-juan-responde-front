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
import { useNavigate } from 'react-router-dom';

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

export default function Ups({ intentos, cantInt }) {

     const [open, setOpen] = React.useState(true);
     const navigate = useNavigate()
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const handleClick = () => {
          intentos === cantInt ? window.location.href = '/' : navigate('/instructions')

     }
     return (
          <div style={{ width: "100%" }}>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={styleModal}>
                         <div
                              className={style.message__body}
                         >    
                              <div className={style.message__icons}>
                                   <img src={sad} alt="" />
                              </div>
                              <div className={style.message__title}>
                                   <h2>¡Ups!</h2>
                              </div>
                              <div className={style.message__text}>
                                   <p>Fallaste, pero puedes intentarlo nuevamente </p>
                                   <br />
                                   <h2>Intento {intentos}/{cantInt}</h2>
                              </div>
                              {intentos === cantInt ?
                                   <button
                                        className='btn btn__bordo'
                                        onClick={handleClick}
                                   >
                                        FINALIZAR
                                   </button>
                                   :
                                   <button
                                        className='btn btn__bordo'
                                        onClick={handleClick}
                                   >
                                        VOLVER A INTENTAR
                                   </button>

                              }

                         </div>
                    </Box>
               </Modal>
          </div>
     );
}