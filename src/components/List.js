const List = (props) => {
  return props.target.map((item, index) => <ReactBootstrap.Nav.Link as='li' key={`${props.hash} ${index}`} className={`list-group-item ${props.BS__options}`} >{item}</ReactBootstrap.Nav.Link>);
}

export default List;