// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Users {
    struct User {
        string userID;
        string username;
        string email;
        string phone;
        string password;
        string role;
        string registeredTime;
    }

    struct LoginRecord {
        string userID;
        string email;
        string password;
        string loggedTime;
    }

    mapping(string => User) private usersByID;
    mapping(string => string) private emailsToUserID; // email -> userID
    mapping(string => string) private phonesToUserID; // phone -> userID
    LoginRecord[] private loggedUsers;
    User[] private registeredUsers;

    event UserRegistered(string userID, string username, string email, string phone, string password, string role, string registeredTime);
    event UserLoggedIn(string userID, string email, string password, string loggedTime);

    function registerUser(
        string memory _userID,
        string memory _username,
        string memory _email,
        string memory _phone,
        string memory _password,
        string memory _role,
        string memory _registeredTime
    ) public {
        require(bytes(usersByID[_userID].userID).length == 0, "User ID already exists");
        require(bytes(emailsToUserID[_email]).length == 0, "Email already registered");
        require(bytes(phonesToUserID[_phone]).length == 0, "Phone number already registered");

        User memory newUser = User(_userID, _username, _email, _phone, _password, _role, _registeredTime);
        usersByID[_userID] = newUser;
        emailsToUserID[_email] = _userID;
        phonesToUserID[_phone] = _userID;
        registeredUsers.push(newUser);

        emit UserRegistered(_userID, _username, _email, _phone, _password, _role, _registeredTime);
    }

    function loginUser(string memory _identifier, string memory _password, string memory _loggedTime) public {
        string memory userId;

        if (bytes(usersByID[_identifier].userID).length != 0) {
            userId = _identifier; // If identifier is a valid userID
        } else {
            userId = emailsToUserID[_identifier]; // If identifier is an email
        }

        require(bytes(usersByID[userId].userID).length != 0, "User not found");
        require(keccak256(bytes(usersByID[userId].password)) == keccak256(bytes(_password)), "Invalid password");

        LoginRecord memory newLogin = LoginRecord(userId, usersByID[userId].email, _password, _loggedTime);
        loggedUsers.push(newLogin);

        emit UserLoggedIn(userId, usersByID[userId].email, _password, _loggedTime);
    }

    function viewRegisteredUsers() public view returns (User[] memory) {
        return registeredUsers;
    }

    function viewLoggedUsers() public view returns (LoginRecord[] memory) {
        return loggedUsers;
    }
}
