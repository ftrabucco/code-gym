let user = {
    age:54,
    name:'Dana',
    magic:true,
    scream: function(){
        console.log('ahhhhhhhh!');
    }
}

user.age // O(1)
user.spell='abra kadabra'; // O(1)
user.scream(); //O(1)


