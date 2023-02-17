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
import happy from '../../../assets/happyFace.svg'
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

export default function Congrats({path}) {

     const [open, setOpen] = React.useState(true);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const navigate = useNavigate()

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
                                   <div className={style.message__icon__1}>
                                        <img src={confeti} alt="" />
                                   </div>
                                   <img src={happy} alt="" />
                                   <div className={style.message__icon__2}>
                                        <img src={confeti} alt="" />
                                   </div>
                              </div>
                              <div className={style.message__congrats__title}>
                                   <h2>¡Felicitaciones!</h2>
                                   <h3>¡Ganaste!</h3>
                                   <br />
                                   <h4>Ya formas parte del sorteo </h4>
                              </div>
                              <div className={style.message__attempts}>
                                   <h2>Intentos  1/5</h2>
                              </div>
                              <button
                                   className='btn btn__bordo'
                                   onClick={()=> navigate(`/instructions`)}
                              >
                                   CONTINUAR
                              </button>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}