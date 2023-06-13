import db from "../../config/index";

const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.log("Erreur:", error);
            reject(error);
          } else {
            const userList = Array.from(results);
            resolve(userList);
          }
    });
  });
};

export default getAllUsers;