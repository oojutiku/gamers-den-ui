import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  children?: any;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {

  const navigate = useNavigate();
  const root = document.getElementById("modal_root");
  if (root) {
    return createPortal(
      <div data-testid="Modal" className='fixed top-0 left-0 h-screen w-screen bg-black/50 z-10 flex justify-center content-center'>
        <div className='m-auto bg-gray-50 dark:bg-slate-900 dark:text-white p-10 relative w-full h-full md:h-fit md:w-6/12'>
          <button onClick={() => navigate(-1)} className="absolute top-2 right-5 p-2">Close</button>
          {props.children}
        </div>
      </div>,
      root
    )
  }

  return null;

}

export default Modal;
