//import React from 'react'

export default function EmpSal() {
    const empData = [ 
        {Name: "Tajmahal",Location:"Agra",Country: "India",url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {Name: "Colosseum",Location:"Rome",Country: "Italy",url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/bd/13/77.jpg"},
    {Name: "Great Wall of China",Location:"China",Country: "China",url: "https://www.worldatlas.com/r/w960-q80/upload/87/2a/96/shutterstock-324699287.jpg"},
    {Name: "Chichén Itzá",Location:"Yucatán",Country: "Mexico",url: "https://www.worldatlas.com/r/w960-q80/upload/6e/1f/a7/shutterstock-73434739.jpg"},
    {Name: "Petra",Location:"Ma'an",Country: "Jordan",url: "https://www.worldatlas.com/r/w960-q80/upload/82/89/88/shutterstock-1030695895.jpg"},
    {Name: "Machu Picchu",Location:"Cuzco Region",Country: "Peru","url": "https://www.worldatlas.com/r/w960-q80/upload/3a/db/de/shutterstock-1387848629.jpg"},
    {Name: "Christ the Redeemer",Location:"Rio de Janeiro",Country: "Brazil","url": "https://www.worldatlas.com/r/w960-q80/upload/b2/0c/ad/shutterstock-1471556480.jpg"},
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Country</th>
              <th scope="col">Url</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.location}</td>
                    <td>{x.country}</td>
                    <td>{x.url}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }
  