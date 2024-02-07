import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectEndGame } from '../../../store/slices/endGameSlice';
import { selectRoom } from '../../../store/slices/roomSlice';
import Button from '../../Button/Button';
import { selectUser } from '../../../store/slices/userSlice';
import './EndGameModal.css';

interface IEndGameModalProps {
  newGame: boolean;
  onClickNewGame: () => void;
  onClickOffer: () => void;
  offer: boolean;
}

const EndGameModal: FC<IEndGameModalProps> = ({
  newGame,
  onClickNewGame,
  onClickOffer,
  offer,
}) => {
  const user = useSelector(selectUser);
  const room = useSelector(selectRoom);
  const endGame = useSelector(selectEndGame);

  const getNameWinner = () => {
    if (!room.players) {
      return '';
    }

    const player = room.players.find((item) => item.active);

    if (!player) {
      return '';
    }

    return player.name;
  };

  return (
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
              {!endGame.winner
                ? 'Tie!'
                : getNameWinner()
                  ? `Победитель - ${getNameWinner()}!`
                  : 'Waiting'}
            </div>
            {user.status !== 'observer' && (
              <>
                {!newGame && (
                  <>
                    {offer && (
                      <div className="modal-content__body">
                        <Button
                          title="You've been asked to play. Let's play!"
                          onClick={onClickOffer}
                        />
                      </div>
                    )}
                    {!offer && (
                      <div className="modal-content__body">
                        <Button
                          title="One more time!"
                          onClick={onClickNewGame}
                        />
                      </div>
                    )}
                    <div className="modal-content__footer">
                      <span className="modal-content__footer_note">Note: </span>
                      В новой игре игрок, инициировавший создание новой игры,
                      будет иметь право на первый ход!
                    </div>
                  </>
                )}
                {newGame && (
                  <div className="modal-content__body">
                    Участник инициировал создание новой игры! Мы ждем
                    подтверждения второго участника!
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EndGameModal;
