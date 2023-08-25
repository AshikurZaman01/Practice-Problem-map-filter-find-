    //display senior instructor name using filters
   
    const instructure = [
        {name : 'Nodi', age:28, position:'Senior'},
        {name : 'Akil', age:26, position:'Junior'},
        {name : 'shobuj', age:30, position:'Senior'},
    ]

    const seniorInstructors = instructure.filter((x) => x.position == 'Senior');

    const instructorName = seniorInstructors.map((x) => x.name);

    console.log(instructorName)
