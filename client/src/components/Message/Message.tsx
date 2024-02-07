import React, { FC } from 'react';
import './Message.css';

interface IMessageProps {
  status: 'player' | 'observer' | undefined;
  roomId: string;
}

const Message: FC<IMessageProps> = ({ status, roomId }) => {
  const messageForObserver = (
    <>
      <p className="message">
        Подождите, пока второй игрок подключится к вашей комнате.
      </p>
    </>
  );

  const messageForPlayer = (
    <>
      <p className="message">
        Подождите, пока второй игрок подключится к вашей комнате.
      </p>
      <p className="message">
        ID Вашей комнаты <span>{roomId}</span>.
      </p>
      <p className="message">
        Отправьте идентификатор второму игроку или подождите случайного
        соперника.
      </p>
    </>
  );
  return <>{status === 'player' ? messageForPlayer : messageForObserver}</>;
};

export default Message;
