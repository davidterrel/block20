const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.getElementById('root');

    //create a h1 element
    const heading = document.createElement('h1')
    heading.textContent = 'FREELANCERS';

    //Append the heading to the root element
    rootElement.appendChild(heading);

    //create a unordered list
    const userList = document.createElement('ul')


    //loop through the users array
    users.forEach((user) => {
        //create a list item for each user
        const listItem = document.createElement('li');
        //create a span for the users name
        const nameSpan = document.createElement('span')
        nameSpan.textContent = user.name;

        //create a span for the users age
        const ageSpan = document.createElement('span')
        ageSpan.textContent = `, ${user.age}`;

        //create a span for the users occupation
        const occupationSpan = document.createElement('span')
        occupationSpan.textContent = `, ${user.occupation}`;
        occupationSpan.classList.add('occupation');

        //Apend the spans to the list items
        listItem.appendChild(nameSpan);
        listItem.appendChild(ageSpan);
        listItem.appendChild(occupationSpan);

        //Apend the list item to the user list
        userList.appendChild(listItem);
    });

    //append the user list to the root element 
    rootElement.appendChild(userList);
}

//call the main function
main();