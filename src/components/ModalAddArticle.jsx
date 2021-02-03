import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ModalAddArticle() {
   const { viewModal } = useSelector(state => state);
   console.log(viewModal)
   return (
      <Modal show={viewModal}>
         <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" >
               Close
            </Button>
            <Button variant="primary">Understood</Button>
         </Modal.Footer>
      </Modal>
   )
};

export default ModalAddArticle;