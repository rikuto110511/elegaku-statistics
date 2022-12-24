'use client';

import React from 'react';
import Data from '../web-api/girl.json';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';

const GirlList = (props) => {
  const change = (e) => {
    props.setId(e.target.value);
  };

  return (
    <>
      <FormControl>
        <FormLabel>生徒</FormLabel>
        <Select placeholder="選択してください" onChange={change}>
          {craeteOptions(Data)}
        </Select>
      </FormControl>
    </>
  );
};

const craeteOptions = (data) => {
  const result = [];
  data.Items.sort((a, b) => (a.id > b.id ? 1 : -1)).forEach((item) => {
    result.push(
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });
  return result;
};

export default GirlList;
