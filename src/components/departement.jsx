import Select from 'react-select'

function Departement({ setDepartement }) {
  const optionsDepartements = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ]
  const handleChangeSelectDepartement = (selectedOption) => {
    console.log(selectedOption.value)
    setDepartement(selectedOption.value)
  }

  return (
    <>
      <label htmlFor="department">Departement :</label>
      <Select
        options={optionsDepartements}
        onChange={handleChangeSelectDepartement}
      />
    </>
  )
}
export default Departement
