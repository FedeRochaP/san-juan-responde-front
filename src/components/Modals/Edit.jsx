import * as React from 'react';

// Styles
import style from './Modal.module.css'

// Modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// Material Icons
import CloseIcon from '@mui/icons-material/Close';
import BorderColorIcon from '@mui/icons-material/BorderColor';

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

export default function Edit() {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div style={{ width: "100%" }}>
               <BorderColorIcon onClick={handleOpen} className={style.modal__icon}/>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={styleModal}>
                         <div className={style.modal__header}>
                              <p>Editar pregunta</p>
                              <CloseIcon className={style.modal__close} onClick={handleClose} />
                         </div>
                         <div
                              className={style.modal__body}
                         >
                              <div className={style.modal__inputs}>
                                   <div className={style.modal__input}>
                                        <label htmlFor="">Ingrese la pregunta</label>
                                        <input type="text" name="" id="" required/>
                                   </div>
                                   <div className={style.modal__inputs__answer}>
                                        <p>Ingrese respuestas</p>
                                        <div className={style.modal__input__answer}>
                                             <input type="text" name="" id="" required/>
                                             <span htmlFor="">Respuesta 1</span>
                                        </div>
                                        <div className={style.modal__input__answer}>
                                             <input type="text" name="" id="" required/>
                                             <span htmlFor="">Respuesta 2</span>
                                        </div>
                                        <div className={style.modal__input__answer}>
                                             <input type="text" name="" id="" required/>
                                             <span htmlFor="">Respuesta 3</span>
                                        </div>
                                        <div className={style.modal__input__answer}>
                                             <input type="text" name="" id="" required/>
                                             <span htmlFor="">Respuesta 4</span>
                                        </div>
                                   </div>
                                   <div className={style.modal__input}>
                                        <p>Selectione la respuesta correcta</p>
                                        <select name="" id="">
                                             <option value="0" selected disabled>Seleccione una respuesta</option>
                                             <option value="1">Respuesta 1</option>
                                             <option value="2">Respuesta 2</option>
                                             <option value="3">Respuesta 3</option>
                                             <option value="4">Respuesta 4</option>
                                        </select>
                                   </div>
                              </div>

                              <button
                                   className='btn__bordo'
                              >
                                   Guardar cambios
                              </button>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}