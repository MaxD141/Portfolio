export default function Card({ proj }){
  return(
    <div className="card">
      {/* Project Name 
      Description 
      Stuff used */}
      <div className="projectName">{proj.name}</div>
      <div className="projectText">{proj.desc}</div>
      <br />
      <div className="projectText"><b>Technologies used: </b>{proj.tech}</div>
      <br />
    </div>
  )
}