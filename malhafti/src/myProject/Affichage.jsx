// export default function Affichage(props) {
//   const { malhafti } = props;
//   return (
//     <div className="container">
//       <div className="row">
//         {malhafti.map((element,i) => {
//           <div key={i} malhafti={element} className="col-12 col-sm-6 col-md-4 mb-3">
//             <div className="card">
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img
//                     width={"100px"}
//                     src={element.image}
//                     className="img-fluid rounded-start"
//                     alt={element.id}
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title">{element.type}</h5> {/* Corrected */}
//                     <p className="card-text">القياس: {element.size}</p>
//                     <p className="card-text">الثمن: {element.price}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         })}
//       </div>
//     </div>
//   );
// }
// export default function Affichage(props){
//     return(
//         <>
//           <img style={{width:"200px"}} src={props.malhafti.image}/>
//           {/* <p>{props.malhafti.id}</p> */}
//           <p>{props.malhafti.type}</p>
//           <p>{props.malhafti.size}</p>
//           <p>{props.malhafti.price}</p>
//           {/* <p>{props.malhafti.categorie}</p> */}
//         </>
//     )
//   }
export default function Affichage(props) {
  return (
    <div className="d-flex flex-wrap justify-content-start">
    <div
      className="card"
      style={{
        width: "250px",
        margin: "20px",
        border: "1px solid grey",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={props.malhafti.image}
        className="card-img-top"
        alt={props.malhafti.type}
      />
      <div className="card-body">
        <h5 className="card-type">{props.malhafti.size}</h5>
        <p className="card-text">{props.malhafti.price}</p>
        <button className="btn btn-primary">
          شراء
        </button>
      </div>
    </div>
   </div>
  );
}
