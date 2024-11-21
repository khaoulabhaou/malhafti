export default function Affichage(props) {
  const { malhafti } = props;
  return (
    <div className="container">
      <div className="row">
        {malhafti.map((element,i) => {
          <div key={i} malhafti={element} className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    width={"100px"}
                    src={element.image}
                    className="img-fluid rounded-start"
                    alt={element.id}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{element.type}</h5> {/* Corrected */}
                    <p className="card-text">القياس: {element.size}</p>
                    <p className="card-text">الثمن: {element.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
