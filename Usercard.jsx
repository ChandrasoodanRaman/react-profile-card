const userdata=[

    {
        name:"soodan",
        city:"mayiladuthurai",
        desc:"software engineer",
        skills:["css","java","javascript","python"] ,
         profile:"images/1.jpg",
    },
    {
      name: "swathi",
      city: "chennai",
      desc: "web developer",
      skills: ["html", "css", "javascript", "react"],
      profile: "images/2.jpg"
    },
    {
      name: "chandra",
      city: "coimbatore",
      desc: "data scientist",
      skills: ["python", "r", "sql", "machine learning"],
      profile: "images/3.jpg"
    }
]

function User(props)
{
    return <div className="card-container">
            
            <img src={props.profile} ></img>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.desc}</p>
            <div>
                <button>message</button>
                <button>following</button>
            </div>
            <div>
                <h6>skills</h6>
                <ul>
                    <ul>{props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}</ul>
                </ul>
            </div>
    </div>

}

export const Usercard=()=>{
    return(
    <>
    {
        userdata.map((user,index)=>(
            <User key={index} 
            name={user.name}
            city={user.city}
            desc={user.desc}
            skills={user.skills}
            profile={user.profile}
            
            
            
            ></User>

        ))
    }
    </>
    );
    

}