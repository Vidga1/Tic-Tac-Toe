import React, { FC } from 'react';
import './PlayerLeftGameModal.css';

interface IPlayerLeftGameModalProps {
  leaverName: string;
}

const PlayerLeftGameModal: FC<IPlayerLeftGameModalProps> = ({ leaverName }) => (
  <>
    <div className="modal-backdrop"></div>
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      style={{ display: 'block' }}
    >
      <div className="modal__dialog modal-dialog">
        <div className="modal-dialog__content modal-content">
          <div className="modal-content__header">
            {leaverName} Покинул игру!
          </div>
          <div className="modal-content__body">
            Для дальнейшей работы с приложением требуется перезагрузка страницы!
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PlayerLeftGameModal;
