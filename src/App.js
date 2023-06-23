import Button from "./components/Button"; 
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open,setModal2Open] = useState(false);
  const largeRed =()=>{
    alert('버튼을 만들어보세요')
  }
  const largeGreen =()=>{
    prompt('어렵나요?')
  }
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal2 = () => {
    setModal2Open(true);
  };
  const closeModal2 = () => {
    setModal2Open(false);
  };

  return (
    <div className="App">
      <div> 
        <h1>Button</h1>
        <Button func={largeRed} size="20" color="white" borderColor="red" title="Large"/>
        <Button size="10" color="red" title="small"/>
        <Button size="15" color="red" title="Medium"/>
        <Button func={largeGreen} size="20" color="white" borderColor="green" title="Large"/>
        <Button size="10" color="green" title="small"/>
        <Button size="15" color="green" title="Medium"/>
      </div>
      <div>
      <h1>Modal</h1>

        <Button func={openModal} color="green" size="7" title="open Modal"/>
        <Modal isOpen={modalOpen} onClose={closeModal} clickOutsideToClose={false} closeBtnStyle={true}>
          <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
        </Modal>

        <Button func={openModal2} color="white" borderColor="red" size="10" title="open Modal"/>
        <Modal isOpen={modal2Open} onClose={closeModal2} clickOutsideToClose={true} closeBtnStyle={false}>
          <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
        </Modal>

      </div>

    </div>
  );
}

export default App;
