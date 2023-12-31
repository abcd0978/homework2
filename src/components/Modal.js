import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useRef } from 'react';


const Modal = ({ isOpen, onClose, children, clickOutsideToClose,closeBtnStyle }) => {
    const modalRef = useRef();

    //buttonStyle:true-> 두개의 버튼 buttonStyle:false->한개의x버튼
    function closeBtnStylehandler(buttonStyle){
        if(buttonStyle){
            return (
                <div style={{position:"relative",left:"200px"}}><Button color="green" func={onClose} title="닫기"/><Button color="red" title="확인"/></div>
            )
        }else{
            return (
                <button onClick={onClose} style={
                    {backgroundColor:"#DDDDDD",
                    fontSize:"15px",
                    borderRadius:"100%", 
                    border:"none",
                    padding:"7px 11px",
                    position:"relative",
                    bottom:"95px",
                    left:"280px"
                }
                }>X</button>
            )
        }
    }

    const ModalWrapper = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const ModalContent = styled.div`
        width:300px;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    `;
    const btnContainer = styled.div`
        width:100px;
        height: 50px;
    `
    const onClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target) && clickOutsideToClose) {
            onClose();
        }
    }
    if (!isOpen) return null;

    return (
        <ModalWrapper onClick={onClickOutside}>
            <ModalContent ref = {modalRef}>
            {children}
            <btnContainer>
                {closeBtnStylehandler(closeBtnStyle)}
            </btnContainer>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
