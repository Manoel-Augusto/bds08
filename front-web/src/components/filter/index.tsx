import { useEffect, useMemo, useState } from 'react';
import { FilterStore, Store } from 'types';
import { buildFilterParams, makeRequest } from 'utils/request';
import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterStore) => void;
  filterStore?: FilterStore;
};

const Filter = ({ onFilterChange, filterStore }: Props) => {
  const [store, setStore] = useState<Store[]>();
  const [storeSelected, setStoreSelected] = useState('');
  const params = useMemo(() => buildFilterParams(filterStore), [filterStore]);

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value;
    setStoreSelected(selectedStore);
    onFilterChange(selectedStore as FilterStore);
  };
  const cleanFilter = () => {
    setStoreSelected('');
    onFilterChange('' as FilterStore);
  };

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores', { params })
      .then((response) => {
        setStore(response.data);
      })

      .catch(() => {
        console.error('Error to fetch sales');
      });
  }, [params]);

  return (
    <div className="filter-container">
      <select
        className="filter-input"
        value={storeSelected}
        onChange={onChangeStore}
      >
        <option value=""> Selecione uma loja</option>

        {store?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {
        <button
          className="btn"
          onClick={() => {
            cleanFilter();
          }}
        >
          <ClearIcon />
        </button>
      }
    </div>
  );
};

export default Filter;
