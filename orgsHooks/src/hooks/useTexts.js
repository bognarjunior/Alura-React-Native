import {useState, useEffect} from 'react';

import {getTexts} from '../services/loadData';

export default function useTexts() {
  const [text, setText] = useState({});

  useEffect(() => {
    const data = getTexts();
    setText(data);
  }, []);

  return text;
}
