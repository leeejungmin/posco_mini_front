import React from 'react';
import {ComboBox, Item, Section} from '@adobe/react-spectrum';
import { useState } from "react";



const Combo =()=>{
    let options = [
        {id: 1, name: '숯불애'},
        {id: 2, name: '오늘통닭'},
        {id: 3, name: '초선과 여포'},
        {id: 4, name: '하나우동'},
        {id: 5, name: '한돈애'}
      ];
      let [majorId, setMajorId] = useState();
      return (
        <>
          <p>Topic id: {majorId}</p>
          <ComboBox
            label="맛집 선택"
            defaultItems={options}
            onSelectionChange={setMajorId}>
            {item => <Item>{item.name}</Item>}
          </ComboBox>
        </>
      );
};
export default Combo;