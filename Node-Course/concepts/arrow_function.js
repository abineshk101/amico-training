// const event = {
//     name:"Birthday party",
//     members:["Abi","Sujin","Vino"],
//     printGuestList:function(){
//         this.members.forEach((guest) => {
//             console.log(guest+ " is attending the "+this.name)
//         });
//     }
// }

// event.printGuestList()

const tasks = {
    tasks: [
        {
        text: 'Grocery shopping',
        completed: true,
    },
     {
        text: 'Clean yard',
        completed: false
    }, 
    {
        text: 'Film course',
        completed: false
    }
    ],
    getTasksToDo() {
        const filterdList = this.tasks.filter((item) => {
            return item.completed == false
        })
        return filterdList
    }
}
console.log(tasks.getTasksToDo())
