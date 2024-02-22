import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

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
  

const dataMocked = [
  {
    "firstName": "Sophia",
    "lastName": "Johnson",
    "dateOfBirth": "5 mars 1989",
    "department": "sales",
    "street": "123 Main Street",
    "city": "San Francisco",
    "state": "California",
    "zipCode": "94105",
    "startDate": "1 janvier 2023"
  },
  {
    "firstName": "Ethan",
    "lastName": "Martinez",
    "dateOfBirth": "12 juillet 1995",
    "department": "marketing",
    "street": "456 Elm Street",
    "city": "New York",
    "state": "New York",
    "zipCode": "10001",
    "startDate": "15 mars 2022"
  },
  {
    "firstName": "Isabella",
    "lastName": "Brown",
    "dateOfBirth": "18 septembre 1987",
    "department": "customer service",
    "street": "789 Oak Avenue",
    "city": "Los Angeles",
    "state": "California",
    "zipCode": "90001",
    "startDate": "10 février 2024"
  },
  {
    "firstName": "Mason",
    "lastName": "Lee",
    "dateOfBirth": "9 avril 1990",
    "department": "finance",
    "street": "1011 Pine Road",
    "city": "Chicago",
    "state": "Illinois",
    "zipCode": "60601",
    "startDate": "20 mai 2023"
  },
  {
    "firstName": "Ava",
    "lastName": "Garcia",
    "dateOfBirth": "23 mai 1993",
    "department": "sales",
    "street": "1213 Cedar Lane",
    "city": "Houston",
    "state": "Texas",
    "zipCode": "77001",
    "startDate": "5 avril 2022"
  },
  {
    "firstName": "Noah",
    "lastName": "Rodriguez",
    "dateOfBirth": "30 décembre 1984",
    "department": "human resources",
    "street": "1415 Maple Street",
    "city": "Miami",
    "state": "Florida",
    "zipCode": "33101",
    "startDate": "3 juin 2022"
  },
  {
    "firstName": "Olivia",
    "lastName": "Hernandez",
    "dateOfBirth": "8 novembre 1998",
    "department": "marketing",
    "street": "1617 Walnut Avenue",
    "city": "Phoenix",
    "state": "Arizona",
    "zipCode": "85001",
    "startDate": "7 septembre 2023"
  },
  {
    "firstName": "William",
    "lastName": "Lopez",
    "dateOfBirth": "14 février 1980",
    "department": "finance",
    "street": "1819 Birch Road",
    "city": "Philadelphia",
    "state": "Pennsylvania",
    "zipCode": "19019",
    "startDate": "12 décembre 2022"
  },
  {
    "firstName": "Emily",
    "lastName": "Gonzalez",
    "dateOfBirth": "20 juin 1986",
    "department": "customer service",
    "street": "2021 Pine Avenue",
    "city": "San Antonio",
    "state": "Texas",
    "zipCode": "78201",
    "startDate": "2 novembre 2022"
  },
  {
    "firstName": "James",
    "lastName": "Perez",
    "dateOfBirth": "17 août 1992",
    "department": "sales",
    "street": "2223 Oak Street",
    "city": "San Diego",
    "state": "California",
    "zipCode": "92101",
    "startDate": "14 janvier 2024"
  },
  {
    "firstName": "Charlotte",
    "lastName": "Williams",
    "dateOfBirth": "3 janvier 1996",
    "department": "marketing",
    "street": "2425 Maple Lane",
    "city": "Dallas",
    "state": "Texas",
    "zipCode": "75201",
    "startDate": "18 juillet 2022"
  },
  {
    "firstName": "Benjamin",
    "lastName": "Jackson",
    "dateOfBirth": "11 avril 1994",
    "department": "human resources",
    "street": "2627 Cedar Road",
    "city": "San Jose",
    "state": "California",
    "zipCode": "95101",
    "startDate": "20 septembre 2023"
  },
  {
    "firstName": "Amelia",
    "lastName": "Anderson",
    "dateOfBirth": "27 février 1983",
    "department": "finance",
    "street": "2829 Elm Avenue",
    "city": "Austin",
    "state": "Texas",
    "zipCode": "73301",
    "startDate": "8 août 2022"
  },
  {
    "firstName": "Michael",
    "lastName": "Thomas",
    "dateOfBirth": "25 mai 1985",
    "department": "customer service",
    "street": "3031 Pine Lane",
    "city": "Jacksonville",
    "state": "Florida",
    "zipCode": "32201",
    "startDate": "16 avril 2023"
  },
  {
    "firstName": "Elizabeth",
    "lastName": "White",
    "dateOfBirth": "10 septembre 1990",
    "department": "sales",
    "street": "3233 Oak Road",
    "city": "Indianapolis",
    "state": "Indiana",
    "zipCode": "46201",
    "startDate": "29 novembre 2022"
  },
  {
    "firstName": "Alexander",
    "lastName": "Harris",
    "dateOfBirth": "19 décembre 1987",
    "department": "marketing",
    "street": "3435 Cedar Lane",
    "city": "San Francisco",
    "state": "California",
    "zipCode": "94105",
    "startDate": "4 janvier 2024"
  },
  {
    "firstName": "Sofia",
    "lastName": "Clark",
    "dateOfBirth": "16 juillet 1981",
    "department": "human resources",
    "street": "3637 Elm Street",
    "city": "Columbus",
    "state": "Ohio",
    "zipCode": "43201",
    "startDate": "19 octobre 2022"
  },
  {
    "firstName": "Daniel",
    "lastName": "Lewis",
    "dateOfBirth": "21 août 1984",
    "department": "finance",
    "street": "3839 Pine Avenue",
    "city": "Charlotte",
    "state": "North Carolina",
    "zipCode": "282"
  },
]

function Table() {
    const employeesList = useSelector((state) => state.employees.list)
    console.log(employeesList);
    const [data, setData] = React.useState(() => [...employeesList])
    console.log(data);
    React.useEffect(() => {
        setData([...employeesList])
      }, [employeesList])
	return (
		<DataTable
			columns={columns}
			data={dataMocked}
            pagination
		/>
	);
};
export default Table