const userData = require("../user-data.json");
const { writeFile, access, constants } = require("node:fs/promises");
const { join } = require("node:path");

const signUpGetMethod = (request, response) => {
  response.status(200).json({
    status: "success",
    data: { message: "sign up html page should be render   (sign up form) " },
  });
};

const signUpPostMethod = async (request, response) => {
  try {
    const {
      firstname = null,
      lastname = null,
      username = null,
      password = null,
      gender = null,
    } = request.body;

    const findUser = userData.find((user) => user.username === username);
    if (findUser) {
      return response.status(404).json({
        status: "fail",
        data: { message: "this username is exist in user db" },
      });
    }

    userData.push({
      firstname,
      lastname,
      username,
      password,
      gender,
    });
    const userDataAsJson = JSON.stringify(userData);

    await access(join(__dirname, "../user-data.json"), constants.F_OK);
    await writeFile(join(__dirname, "../user-data.json"), userDataAsJson);

    response.status(200).json({
      status: "success",
      data: {
        message: "new user added",
        user: { firstname, lastname, username, gender },
      },
    });
  } catch (error) {
    console.log(`controller>auth-controller>signUpPostMethod `, error?.message);
    response.status(500).json({
      status: "error",
      data: {
        message: "internal server error",
      },
    });
  }
};

const loginGetMethod = (request, response) => {
  response.status(200).json({
    status: "success",
    data: { message: "Login html page should be render  (login form) " },
  });
};

const loginPostMethod = async (request, response) => {
  try {
    const { username = null, password = null } = request.body;

    const findUser = userData.find((user) => user.username === username);
    if (!findUser) {
      return response.status(400).json({
        status: "fail",
        data: { message: "username or password is invalid(username)" },
      });
    }
    if (findUser.password !== password) {
      return response.status(400).json({
        status: "fail",
        data: { message: "username or password is invalid(password)" },
      });
    }

    response.status(200).json({
      status: "success",
      data: {
        message: "username and password are match",
        user: {
          firstname: findUser.firstname,
          lastname: findUser.lastname,
          username: findUser.username,
          gender: findUser.gender,
        },
      },
    });
  } catch (error) {
    console.log(`controller>auth-controller>loginPostMethod `, error?.message);
    response.status(500).json({
      status: "error",
      data: {
        message: "internal server error",
      },
    });
  }
};

module.exports = { signUpGetMethod, signUpPostMethod, loginGetMethod, loginPostMethod };
