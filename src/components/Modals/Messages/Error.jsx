import * as React from 'react';

// Styles
import style from './Messages.module.css'

// Modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Material Icons
import CloseIcon from '@mui/icons-material/Close';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

export default function Error() {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div style={{ width: "100%" }}>
               <button onClick={handleOpen} className='btn btn__bordo'>Error test</button>
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
                                   <SentimentVeryDissatisfiedIcon />
                              </div>
                              <div className={style.message__title}>
                                   <h2>¡UPS!</h2>
                              </div>
                              <h4>Fallaste, pero puedes intentarlo nuevamente </h4>
                              <div className={style.message__correct}>
                                   <p>La respuesta correcta es:</p>
                                   <h3></h3>
                              </div>
                              <div className={style.message__lives}>
                                   <FavoriteIcon />
                                   <h2>Intento </h2>
                              </div>
                              <button
                                   className='btn btn__bordo'
                              >
                                   CONTINUAR
                              </button>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}