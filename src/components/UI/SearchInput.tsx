type InputProps = {
  value: string
  onChange(value: string): void
  icon: string
}

const SearchInput: React.FC<InputProps> = ({
  value,
  onChange,
  icon
}) =>  (
  <div className="search-input">
    <input
      className="search-input__container" 
      type="text" 
      placeholder="Buscar aquí película" 
      value={value} 
      onChange={({ target }) => onChange(target.value)}
    />
    <section className="search-input__icon">
      <img src={icon} alt="Icono de lupa" />
    </section>
  </div>
)

export default SearchInput;
