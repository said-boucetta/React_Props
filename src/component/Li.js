const Li = (props) => {
  console.log(props);
  return (
    <div>
      <li>{props.data}</li>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Li;
//props={data:item}.
