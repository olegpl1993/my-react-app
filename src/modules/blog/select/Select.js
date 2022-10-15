import './Select.css';

function Select({change}) {
  const changeSort = (e) => {
    change(e.target.value)
  }

  return (
    <select className="select" onChange={e => changeSort(e)} defaultValue={'default'}>
      <option value="default" disabled>default</option>
      <option value="title">title</option>
      <option value="text">text</option>
    </select>
  );
}

export default Select;