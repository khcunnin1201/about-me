const aboutMe = {
    name: "kris",
    age: "noneya",
    children: {
        haveAny: "yes",
        childName: "kipp",
        childAge: 17
    },
    pets: {
        cat1:{
            name: "kiro",
            age: 15
                    },
        cat2: {
            name: "george",
            age: 11
                    },
        cat3: {
            name: "ava",
            age: 5           
        }
    }
    }
    console.log('Hello, my name is '+ aboutMe.name)
    console.log('I have a daughter named ' + aboutMe.children.childName)
    console.log('I also have 3 cats named ' + aboutMe.pets.cat1.name + ', ' + aboutMe.pets.cat2.name + ', and ' + aboutMe.pets.cat3.name)