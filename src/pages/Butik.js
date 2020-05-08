import React, { useEffect, useState } from 'react'
import BaseComponent from '../components/BaseComponent'
import { Button } from '../components/Button';

const Butik = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ queueLength: 2, inQueue: false, queuePosition: 3 });
    }, 400)
  }, [])

  const handleClick = () => {
    setData({
      ...data,
      inQueue: !data.inQueue
    })
  }

  if (data === null) return <BaseComponent title={"Laddar.."} />
  return (
    <BaseComponent title={props.butikid}>
      <p>{data.inQueue ? `Du har plats nr ${data.queuePosition} i kön` : `Du står inte i kö ännu`}</p>
      <p>Det är för närvarande {data.queueLength} andra personer i kö.</p>
      <Button color="blue" onClick={handleClick}>{data.inQueue ? "Lämna kön" : "Ställ dig i Kö"}</Button>

    </BaseComponent>
  )
}

export default Butik
