const List = ({ people }) => {
  return (
    <>
      List Component
      {
        people.map((person)=>{
            const {id,name,age,image}=person;
            return(
                <article key={id}>
                    <image src={image} alt="person image"/>
                    <h1>{name}</h1>
                    <p>{age}</p>
                </article>
            )
        })
      }
    </>
  );
};
export default List;
