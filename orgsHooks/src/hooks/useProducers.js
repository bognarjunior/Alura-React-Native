/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';
import {getProducers} from '../services/loadData';

export default function useProducers(bestProducers) {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const data = getProducers();
    data.list.sort((prod1, prod2) => prod1.distance - prod2.distance);
    let newData = data.list;
    if (bestProducers) {
      newData = newData.filter(producers => producers.stars > 3);
    }
    setTitle(data.title);
    setProducers(newData);
  }, [bestProducers]);

  return [title, producers];
}
