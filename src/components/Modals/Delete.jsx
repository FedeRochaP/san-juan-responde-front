import * as React from 'react';

// Styles
import style from './Modal.module.css'

// Modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Material Icons
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function Delete() {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div style={{ width: "100%" }}>
               <DeleteIcon onClick={handleOpen} className={style.modal__icon}/>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={styleModal}>
                         <div className={style.modal__header}>
                              <p>Eliminar pregunta</p>
                              <CloseIcon className={style.modal__close} onClick={handleClose} />
                         </div>
                         <div
                              className={style.modal__body}
                         >
                             <h2>¿Esta seguro que desea eliminar la pregunta?</h2>

                              <button
                                   className='btn__bordo'
                              >
                                   Eliminar
                              </button>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}