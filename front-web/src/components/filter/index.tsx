import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { FilterData, Store } from '../../types';

type Props = {
  onFilterChange: (filter: FilterData) => void;
  stores?: Store[];
};

function Filter({ onFilterChange, stores }: Props) {
  const { control } = useForm<FilterData>();

  return (
    <div className="filter-container base-card">
      <Controller
        name="storeId"
        control={control}
        render={({}) => (
          <Select
            options={stores}
            isClearable
            placeholder="Categoria"
            classNamePrefix="product-filter-select"
            onChange={(value) => onFilterChange({ storeId: value?.id } as FilterData)}
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      />
    </div>
  );
}

export default Filter;
