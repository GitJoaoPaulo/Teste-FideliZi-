import './card.css';
import Modal from "../Modal/Modal";
import {useState} from 'react';


function Card({title, index, titleButton, textList, nameImage, direction, indexDirection, colorHeader, htmlString}){

    const[showModal, setShowModal] = useState(false);

    function openModal(){
        setShowModal(true);
    }

    return(

        <div style={{
            display: "flex",
            flexDirection: direction,
            alignItems: "center",
            marginTop: "10px"
        }}>
            
            {showModal ? <Modal title={title} htmlString={htmlString} setShowModal={setShowModal}/> : null}

            <div className='card'>
                
                <div className='header-card' style={{
                    backgroundImage: `url(${nameImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: colorHeader,
                    backgroundSize: "cover"  

                    }}>
                    
                    <div style={{
                       display: "flex",
                       justifyContent: indexDirection,
                       alignItems: "center",
                       width: "100%",
                    }}>
                        
                    <div style={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       color: "white",
                       width: "112px",
                       height: "44.43px",
                       backgroundColor: "#E14BDB",
                    }}>{index}</div>
                    
                </div>

                    <h2>{title}</h2>

                </div>

                <div className='container-text'>
                    {textList.map((text, index) => <p key={index}>{text}</p>)}
                </div>

                <button onClick={() => openModal()}>{titleButton}</button>

            </div>
        </div>
    );
}

export default Card;