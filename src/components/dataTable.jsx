import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import  GlobalFilter  from './filterGlobal';
import DataMocked, { dataMocked } from '../datas/datasMocked'
import styled from 'styled-components';


const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filtrer par Prénom"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
);

const columns = [
    {
      name: 'Prénom',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Nom de famille',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Date de début',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Département',
      // selector: row => row.departement,
      selector: row => row.department,
      sortable: true,
    },
    {
      name: 'Date de naissance',
      selector: row => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Rue',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'Ville',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'État',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'zipCode',
      selector: row => row.zipCode,
      sortable: true,
    },
  ];
  


function Table() {
    const employeesList = useSelector((state) => state.employees.list)
    console.log(employeesList);
    const [data, setData] = React.useState(() => [...employeesList])
    console.log(data);
    React.useEffect(() => {
        setData([...employeesList])
      }, [employeesList])
/////////////////////////////////////////
/////////////////////////////////////////
const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = dataMocked.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
  );
const subHeaderComponentMemo = React.useMemo(() => {
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };
return (
  <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
);
}, [filterText, resetPaginationToggle]);

/////////////////////////////////////////
/////////////////////////////////////////



	return (
    <>
    {/* <GlobalFilter/> */}
		<DataTable
			columns={columns}
			// data={data}
			// data={dataMocked}
			data={filteredItems}
      pagination
      subHeader
			subHeaderComponent={subHeaderComponentMemo}
      />
      </>
	);
};
export default Table