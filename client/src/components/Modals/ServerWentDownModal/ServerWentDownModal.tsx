import React, { FC } from 'react';
import './ServerWentDownModal.css';

const ServerWentDownModal: FC = () => (
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
          <div className="modal-content__header">Сервер вышел из строя!</div>
          <div className="modal-content__body">
            Мы обязательно решим эту проблему! Попробуйте подключиться позже!
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ServerWentDownModal;
