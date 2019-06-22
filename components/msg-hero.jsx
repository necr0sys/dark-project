import { Button } from 'reactstrap';
import './msg-hero.scss';

const MsgHero = ({ onClick }) => (
  <div className="container_msg">
    <p className="msg_animate">disfruta</p>
    <p className="msg_animate">comparte</p>
    <div>
      <span className="msg_animate">se </span>
      <span className="msg_animate">parte </span>
      <span className="msg_animate">del </span>
      <span className="msg_animate">cambio </span>
      <span className="msg_animate">con: </span>
    </div>
    <div className="greenlink_hero_cont msg_animate">
      <p>greenlink</p>
      <Button onClick={onClick} color="link" outline size="sm">Unete</Button>
      <div className="line" />
    </div>
  </div>
);

export default MsgHero;
