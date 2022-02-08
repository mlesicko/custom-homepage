import { useDispatch, useSelector } from "react-redux";
import { Modal } from "reactstrap";
import { closeModal } from "../redux/modalActions";
import { modalFromType } from './modalTypes';

const ModalWrapper = ({children}) => {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.modalState.type);
	const ModalType = modalFromType(type);
	const close = () => dispatch(closeModal());
	return (
		<div>
			{ModalType ? 
				(
					<Modal
						isOpen={true} 
						onClose={close}
						toggle={close}
						centered={true}
						backdrop={true}>
						<ModalType close={close}/>
					</Modal>
				) : null
			}
			{children}
		</div>
	);
}

export default ModalWrapper;
