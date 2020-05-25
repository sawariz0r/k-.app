import React, { useEffect, useState, useContext } from 'react'
import BaseComponent from '../components/BaseComponent'
import { Button } from '../components/Button';
import Styled from "styled-components";
import { Context } from '../Context';

const Position = Styled.div`
  color: ${props => props.theme.color.orange};;
  font-size: 5rem;
  font-weight: 800;
`;

const Butik = (props) => {
  const [state] = useContext(Context);
  const [data, setData] = useState(null);

  useEffect(() => {
    state.socket.emit("butikInfo", { butik: props.butikid }, (res) => {
      console.log(res);
      setData(res.data);
    })
    //eslint-disable-next-line
  }, [])

  const handleClick = () => {
    state.socket.emit("joinQueue", { butik: props.butikid }, (res) => {
      console.log(res);
      setData(res.data);
    })
  }

  if (data === null) return <BaseComponent title={"Laddar.."} />
  return (
    <BaseComponent title={props.butikid}>
      <p>{data.inQueue && data.queuePosition !== -1 ? `Du har köplats:` : ``}</p>
      <Position>{data.queuePosition !== -1 && data.queuePosition + 1}</Position>
      <p>{data.queueLength} andra personer i kö.</p>
      <Button color="blue" onClick={handleClick}>{data.inQueue ? "Gå ur kön" : "Ställ dig i Kö"}</Button>

    </BaseComponent>
  )
}

export default Butik
