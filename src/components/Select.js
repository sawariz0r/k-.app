import React from 'react';
import Styled from "styled-components";

const SelectEl = Styled.select`
  -webkit-appearance: none;
  appearance: none;
  font-family: Barlow;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  background: ${props => props.theme.color.black}20;;
  color: ${props => props.theme.color.black};;
  border: none;
  outline: none;
  font-family: Heebo, sans-serif;

  * {
    font-family: Heebo, sans-serif;

  }
`;

const Select = (props) => {
  return (
    <SelectEl onChange={props.onChange} defaultValue={""}>
        <option value={""} disabled>Välj butik här</option>
      {
        props.data ? 
        props.data.map((x, i) => {
          return <option key={x+i} value={x.namn}>{x.namn}</option>
        })
        : 
        <option>Inga butiker tillgängliga</option>
      }
    </SelectEl>
  )
}

export default Select
