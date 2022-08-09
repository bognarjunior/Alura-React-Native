import {useEffect, useState} from 'react';
import {getProducers} from '../services/loadData';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const data = getProducers();
    data.list.sort((prod1, prod2) => prod1.distance - prod2.distance);
    setTitle(data.title);
    setProducers(data.list);
  }, []);

  return [title, producers];
}
