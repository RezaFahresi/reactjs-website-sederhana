import '../styles/Patners.css';

function Patners(props) {
  return (
    <div className="partner-list">
      {
        props.patnersList.map((item, index) => {
          return (
            <div className="kartu-partner" key={index}>
              <img src={item.image} alt={`Partner ${index + 1}`} />
            </div>
          );
        })
      }
    </div>
  );
}

export default Patners;
