import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';   // NEW import
import { listTodos } from '../../../backend/src/graphql/queries'

const client = generateClient(); 

export default function TodoList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.graphql({
          query: listTodos,
        });
        setItems(data.listTodos.items);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <ul className="list-group">
      {items.map((t) => (
        <li key={t.id} className="list-group-item">
          {t.name}
        </li>
      ))}
    </ul>
  );
}