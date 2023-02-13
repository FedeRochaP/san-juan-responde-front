import * as React from 'react';

// Styles
import style from './Messages.module.css'

// Modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Material Icons
import CloseIcon from '@mui/icons-material/Close';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

// Images
import confeti from '../../../assets/confeti.svg'

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

export default function Congrats() {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div style={{ width: "100%" }}>
               <button onClick={handleOpen} className='btn__bordo'>Congrats test</button>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={styleModal}>
                         <div className={style.message__header}>
                              <CloseIcon onClick={handleClose} />
                         </div>
                         <div
                              className={style.message__body}
                         >
                              <div className={style.message__icons}>
                                   <div className={style.message__icon__1}>
                                        <img src={confeti} alt="" />
                                   </div>
                                   <SentimentSatisfiedAltIcon />
                                   <div className={style.message__icon__2}>
                                        <img src={confeti} alt="" />
                                   </div>
                              </div>
                              <div className={style.message__title}>
                                   <h2>¡Felicitaciones!</h2>
                                   <h3>¡Ganaste!</h3>
                              </div>
                              <h4>A continuación deja tus datos y participa del sorteo</h4>
                              <button
                                   className='btn__bordo'
                              >
                                   CONTINUAR
                              </button>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}