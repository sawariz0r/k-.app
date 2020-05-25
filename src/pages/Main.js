import React, { useContext } from 'react'
import BaseComponent from '../components/BaseComponent'
import { Context } from '../Context'
import { navigate } from '@reach/router'
import SelectList from '../components/SelectList'

const Main = () => {
  const [state] = useContext(Context);

  const handleTargetRedirect = (target) => {
    if (target !== null) {
      navigate(`/${target}`);
    }
  }

  if (state.ready !== true) return <BaseComponent title="Loading.." />
  return (
    <BaseComponent>
      <p style={{ display: "flex", justifyContent: "center", flexDirection: "column", flex: "1", width: "100%"}}>
        <SelectList items={state.butiker} handleRedirect={handleTargetRedirect} />
      </p>
      <p>
        <b>I en speciell tid krävs det speciella åtgärder!</b><br />
        Därför har jag tagit fram ett betala-vad-du-vill-verktyg för mindre företag som kanske inte har budgeten att tillfälligt implementera ett digitalt kösystem.
        <br /><br />
        Den här tjänsten <b>kommer inte fråga efter eller spara någon av din data</b>, du kan dock välja att dela ett meddelande till butiken du står i kö till. Till exempel för att förbereda butiken på er beställning så allt kan gå smidigt till.
        <br /><br />
        Vill du börja använda Kö.app i din butik? <br />Hör av dig till <a style={{ color: "#FA824C", textDecoration: "none", fontWeight: "600" }} href="mailto:oscar@osuka.dev">oscar@osuka.dev</a>
    </p>
    </BaseComponent>
  )
}

export default Main
