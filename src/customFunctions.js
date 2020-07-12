import { db } from './firebase';

export const getCollectionWhere = (collection, field, operator, value) => {

    return new Promise((res, rej) => {
        db.collection(collection).where(field, operator, value)
        .get()
        .then(snapsot => {
            const data = snapsot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            res(data)
        })
        .catch(error => {
            rej(error)
        });
    })

}

export const addNewUserToDB = (name, lastName, email, password) => {
    db.collection("Users").doc().set({
        name: name,
        lastName: lastName,
        email: email,
        password: password
    })
    .then(function() {
        console.log("User successfully added!");
    })
    .catch(function(error) {
        console.error("Error adding user: ", error);
    });
}

export const addNewTaskToDB = (userId, title, describe) => {
    db.collection("todos").doc().set({
        userId: userId,
        title: title,
        describe: describe,
        status: 'in progress'
    })
    .then(function() {
        console.log("Task successfully added!");
    })
    .catch(function(error) {
        console.error("Error adding task: ", error);
    });
}

export const editTaskFB = (id, title, describe, status) => {
    db.collection("todos").doc(id).update({
        title: title,
        describe: describe,
        status: status
    })
    .then(function() {
        console.log("Task successfully edited!");
    })
    .catch(function(error) {
        console.error("Error edit task: ", error);
    });
}
