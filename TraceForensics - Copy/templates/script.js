

let web3 = new Web3("HTTP://127.0.0.1:7545");
        const contractAddress = "0xc9A4021A77CA02bfBA688De71D92882BAe84f743";
        const casecontractAddress = "0x6812A68e08Da7a8bF505f53084A9B00BF3F12528";

        /* users ABI*/
        const contractABI = [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "userID",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "password",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "loggedTime",
                "type": "string"
              }
            ],
            "name": "UserLoggedIn",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "userID",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "username",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "phone",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "password",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "role",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "registeredTime",
                "type": "string"
              }
            ],
            "name": "UserRegistered",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_userID",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_username",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_email",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_password",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_role",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_registeredTime",
                "type": "string"
              }
            ],
            "name": "registerUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_identifier",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_password",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_loggedTime",
                "type": "string"
              }
            ],
            "name": "loginUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "viewRegisteredUsers",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "userID",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "phone",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "role",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "registeredTime",
                    "type": "string"
                  }
                ],
                "internalType": "struct Users.User[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "viewLoggedUsers",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "userID",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "loggedTime",
                    "type": "string"
                  }
                ],
                "internalType": "struct Users.LoginRecord[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          }
      ];

    /* CASE ABI */
    
   const caseABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_desc",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_investigator",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_suspect",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_digitalDevice",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "newCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_analystType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_analystName",
          "type": "string"
        }
      ],
      "name": "assignTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_analystType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_accepted",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "updateTaskStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_analystName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_FA_Results",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "updateCaseByForensic",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_analystName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_SA_Results",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "updateCaseByStego",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_report",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "closeCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_caseId",
          "type": "string"
        }
      ],
      "name": "viewCase",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "caseId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "caseTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "suspect",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "digitalDevice",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "investigator",
              "type": "string"
            },
            {
              "internalType": "enum CaseRegistration.CaseStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "forensicAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "FA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "SA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "report",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "newCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "closeCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoStatus",
              "type": "string"
            }
          ],
          "internalType": "struct CaseRegistration.Case",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "viewAllCases",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "caseId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "caseTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "suspect",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "digitalDevice",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "investigator",
              "type": "string"
            },
            {
              "internalType": "enum CaseRegistration.CaseStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "forensicAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "FA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "SA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "report",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "newCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "closeCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoStatus",
              "type": "string"
            }
          ],
          "internalType": "struct CaseRegistration.Case[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "enum CaseRegistration.CaseStatus",
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "viewTypeCases",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "caseId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "caseTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "suspect",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "digitalDevice",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "investigator",
              "type": "string"
            },
            {
              "internalType": "enum CaseRegistration.CaseStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "forensicAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "FA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoAnalyst",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "SA_Results",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "report",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "newCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoUpdateTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "closeCaseTime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAssigned",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoTaskAccepted",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "forensicStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stegoStatus",
              "type": "string"
            }
          ],
          "internalType": "struct CaseRegistration.Case[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
    ];
    let userContract = new web3.eth.Contract(contractABI, contractAddress);
    let casecontract = new web3.eth.Contract(caseABI, casecontractAddress);
