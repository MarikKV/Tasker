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
export const getDocById = (collection, id,) => {

    return new Promise((res, rej) => {
        db.collection(collection).doc(id)
        .get()
        .then(doc => {
            if (doc.exists) {
                res(doc.data())
            }else{
                res(null)
            }
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


export const addNewSharedTaskToDB = (userId, title, describe, sharedTo, from) => {
    db.collection("sharedTodos").doc().set({
        userId: userId,
        title: title,
        describe: describe,
        sharedTo: sharedTo,
        from: from,
        status: 'not accepted'
    })
    .then(function() {
        console.log("Shared task successfully added!");
    })
    .catch(function(error) {
        console.error("Error adding shered task: ", error);
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

export const editSharedTaskFB = (id, title, describe, status) => {
    db.collection("sharedTodos").doc(id).update({
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

