import React, { FC } from 'react';
import './StartMenu.css';
import Button from '../Button/Button';

interface IStartMenuProps {
  onClickPlayer: () => void;
  onClickObserver: () => void;
}

const StartMenu: FC<IStartMenuProps> = ({ onClickPlayer, onClickObserver }) => (
  <div className="start-menu _container">
    <h2 className="start-menu__title">Хочешь просто наблюдать или играть?</h2>
    <div className="start-menu__buttons">
      <Button title="Player" onClick={onClickPlayer} />
      <Button title="Observer" onClick={onClickObserver} />
    </div>
  </div>
);

export default StartMenu;
