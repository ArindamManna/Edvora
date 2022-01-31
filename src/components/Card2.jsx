function Card2(props) {
    let name=props.name;
    
  return (
    <>
      <div className="card2" onClick={()=>{
        console.log(name,props.data);
          props.set_openDropdown({
              ...props.openDropdown,
              name:false,
          })
          if (props.data===props.name2) {
            props.set_selected({
                ...props.selected,
                [name]:[false,props.data]
            })
          }else{
            props.set_selected({
                ...props.selected,
                [name]:[true,props.data]
            })
          }
          
      }}>
        <div className="item flex-c">
          <div className="inside_item flex flex-ai-c flex-jc-sb">
            <span>{props.data}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
