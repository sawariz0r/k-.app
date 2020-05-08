import React, { useContext, useState } from 'react'
import BaseComponent from '../components/BaseComponent'
import { Button } from '../components/Button'
import { Context } from '../Context'
import Select from '../components/Select'
import { navigate } from '@reach/router'

const Main = () => {
  const [state, dispatch] = useContext(Context);
  const [target, setTarget] = useState(null);

  const handleChange = (e) => {
    setTarget(e.currentTarget.value);
  }

  const handleTargetRedirect = () => {
    if (target !== null) {
      navigate(`/${target}`);
    }
  }

  if (state.ready !== true) return <BaseComponent title="Loading.." />
  return (
    <BaseComponent>
      <p style={{ display: "flex", justifyContent: "center", flexDirection: "column", flex: "1"}}>
        <span>För att se kön och ställa dig i kön, välj en butik nedan:</span>
        <Select onChange={handleChange} data={state.butiker} />
        <Button onClick={handleTargetRedirect} color="blue">Gå till butik</Button>
      </p>
      <p style={{ opacity: "0.7" }}>
        I en speciell tid krävs det speciella åtgärder.<br />
      Därför har jag tagit fram ett betala-vad-du-vill-verktyg för mindre företag som kanske inte har budgeten eller energin att implementera ett digitalt kösystem.
        <br /><br />
        Den här appen <b>kommer inte fråga efter eller spara någon data</b>, du kan dock välja att dela ett meddelande och/eller din platsinformation under tiden du använder Kö.app till företaget/butiken du står i kö till. Till exempel för leverans till bil eller din plats om denne stödjer detta.
        <br /><br />
        Intresserad? Maila mig på <a style={{ color: "#FA824C", textDecoration: "none", fontWeight: "600" }} href="mailto:oscar@osuka.dev">oscar@osuka.dev</a> så hjälper jag dig att sätta upp tjänsten. Du kan köra tjänsten direkt från de flesta enheter, så det krävs ingen ny enhet eller hårdvara för att köra tjänsten.
    </p>
    </BaseComponent>
  )
}

export default Main
