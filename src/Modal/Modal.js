import './modal.css';
import HTMLReactParser from 'html-react-parser';

function Modal({setShowModal, title, htmlString}) {

    function closeModal(){
        setShowModal(false);
    }

    return (
        <div className="modal-idle">
            <div className="modal">
                <p className='button' onClick={() => closeModal()}>X</p>
                <div className="modal-title">
                    <h1>{title}</h1>
                </div>
                    <div className="modal-text">
                    {HTMLReactParser(htmlString)}
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;


// 

// 


// 
