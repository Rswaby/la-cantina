import moment from 'moment'
export const EventsData = () =>{
    const event = new Date();
    return(
        [
            {
                id:1,
                name: "Ctp Demo Night",
                description: "A constraint stores the unread tube after a camera. The significance pretends to be the vegetable cider. A courtesy spits across the witch. The drinking scrap indulges. A fundamentalist experiences the grandfather.",
                capacity:30,
                attending:[ {name:"user1"},{name:"user2"},{name:"bob3"},{name:"bob4"},{name:"bob4"} ],
                address:"1136 Taylor Street",
                zipcode:"33484",
                organizer:{name:"bob"},
                time:event.getTime(),
                Date:event.getDate(),
                duration:"40mins"
                
            },
            {
                id:2,
                name: "How to Run like Naruto",
                description: "A constraint stores the unread tube after a camera. The significance pretends to be the vegetable cider. A courtesy spits across the witch. The drinking scrap indulges. A fundamentalist experiences the grandfather.",
                capacity:30,
                attending:[ {name:"user1"},{name:"user2"},{name:"bob3"},{name:"bob4"},{name:"bob4"} ],
                address:"4952 Abia Martin Drive",
                zipcode: "02887",
                organizer:{name:"bob"},
                time:event.getTime(),
                Date:event.getDate(),
                duration:"40mins"
                
            },
            {
                id:3,
                name: "Ctp Demo Night3",
                description: "A constraint stores the unread tube after a camera. The significance pretends to be the vegetable cider. A courtesy spits across the witch. The drinking scrap indulges. A fundamentalist experiences the grandfather.",
                capacity:30,
                attending:[ {name:"user1"},{name:"user2"},{name:"bob3"},{name:"bob4"},{name:"bob4"} ],
                address:"3665 Bicetown Road",
                zipcode:"10016",
                organizer:{name:"bob"},
                time:event.getTime(),
                Date:event.getDate(),
                duration:"40mins"
                
            },
            {
                id:4,
                name: "what is this",
                description: "A constraint stores the unread tube after a camera. The significance pretends to be the vegetable cider. A courtesy spits across the witch. The drinking scrap indulges. A fundamentalist experiences the grandfather.",
                capacity:30,
                attending:[ {name:"user1"},{name:"user2"},{name:"bob3"},{name:"bob4"},{name:"bob4"} ],
                address:"2585 Ward Road",
                zipcode:33484,
                organizer:{name:"bob"},
                time:event.getTime(),
                Date:event.getDate(),
                duration:"40mins"
                
            },
            {
                id:5,
                name: "Talking about Dogs",
                description: "A constraint stores the unread tube after a camera. The significance pretends to be the vegetable cider. A courtesy spits across the witch. The drinking scrap indulges. A fundamentalist experiences the grandfather.",
                capacity:30,
                attending:[ {name:"user1"},{name:"user2"},{name:"bob3"},{name:"bob4"},{name:"bob4"} ],
                address:"3064 Deans Lane",
                zipcode:"10019",
                organizer:{name:"bob"},
                time:event.getTime(),
                Date:event.getDate(),
                duration:"40mins"
                
            }
        ]
    )
}