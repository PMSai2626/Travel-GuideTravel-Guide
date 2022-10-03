import './index.css'

const AppItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <li className="li-el">
      <img src={imageUrl} className="ima" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}

export default AppItem
