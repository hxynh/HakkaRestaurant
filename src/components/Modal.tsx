import { ReactNode } from 'react';

interface ModalType {
    children?: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export default function Modal(props: ModalType) {
    if (!props.isOpen) return null
    else {
        return (
        <div 
            className={`fixed inset-0 flex justify-center items-center transition-colors ${props.isOpen ? "visible bg-black/20" : "invisible"}`}
            onClick={props.onClose}
            >
        <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${props.isOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}>
            <button 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={props.onClose}>
                    ✕
            </button>
            {props.children}
            {/* <div className="modal-action">
            
                <button className="btn" onClick={props.onClose}>Close</button>
            </div> */}
        </div>
        </div>
        )
    }
}
