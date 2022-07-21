// object inside array

// real world application

const users = [
    {user_id: 1, firstName: 'amit', gender: 'male'},
    {user_id: 2, firstName: 'pritee', gender: 'female'},
    {user_id: 3, firstName: 'sunita', gender: 'female'},

]

for(let user of users){
    console.log(user.firstName);
}

// nested distructring

const [ {firstName: user1firstName},  , {gender: sex} ] = users;
console.log(user1firstName, sex)
