import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector} from "react-redux"
import { selectModalIsOpen, selectModalOnCancel, selectModalText, selectModalOnConfirm } from "../../selectors"

const ModalContainer = ({ className }) => {
    const isOpen = useSelector(selectModalIsOpen);
    const text = useSelector(selectModalText);
    const onConfirm = useSelector(selectModalOnConfirm);
    const onCancel = useSelector(selectModalOnCancel);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={className}>
            <div className="overlay"></div>
            <div className="box">
                <h3>{text}</h3>
                <div className="buttons">
                    <Button width="120px" onClick={onConfirm}>
                        Да
                    </Button>
                    <Button width="120px" onClick={onCancel}>
                        Отмена
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(3px);
	}

	& .box {
        border-radius: 5px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin: 0 auto;
        padding: 30px 0;
		width: 400px;
		background-color: #fff;
		text-align: center;
        box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
	}

	& .buttons {
        margin-top: 20px;
		display: flex;
		justify-content: center;
	}

	& .buttons button:first-child {
		margin-right: 10px;
	}
`;
