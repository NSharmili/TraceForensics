// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract CaseRegistration {
    enum CaseStatus { Open, Investigating, Closed }

    struct Case {
        string caseId;
        string caseTitle;
        string description;
        string suspect;
        string digitalDevice;
        string investigator;
        CaseStatus status;
        string forensicAnalyst;
        string FA_Results;
        string stegoAnalyst;
        string SA_Results;
        string report;
        string newCaseTime;
        string forensicUpdateTime;
        string stegoUpdateTime;
        string closeCaseTime;

        // New fields
        string forensicTaskAssigned;
        string stegoTaskAssigned;
        string forensicTaskAccepted;
        string stegoTaskAccepted;
        string forensicStatus;
        string stegoStatus;
    }

    mapping(string => Case) private cases;
    string[] private caseIds;

    function newCase(
        string memory _caseId, 
        string memory _title,
        string memory _desc,
        string memory _investigator,
        string memory _suspect,
        string memory _digitalDevice,
        string memory _timestamp
    ) public {
        require(bytes(cases[_caseId].caseId).length == 0, "Case ID already exists");

        cases[_caseId] = Case({
            caseId: _caseId,
            caseTitle: _title,
            description: _desc,
            suspect: _suspect,
            digitalDevice: _digitalDevice,
            investigator: _investigator,
            status: CaseStatus.Open,
            forensicAnalyst: "N/A",
            FA_Results: "N/A",
            stegoAnalyst: "N/A",
            SA_Results: "N/A",
            report: "N/A",
            newCaseTime: _timestamp,
            forensicUpdateTime: "N/A",
            stegoUpdateTime: "N/A",
            closeCaseTime: "N/A",

            // Initialize new fields to "-"
            forensicTaskAssigned: "-", // Changed to "-"
            stegoTaskAssigned: "-",    // Changed to "-"
            forensicTaskAccepted: "-", // Changed to "-"
            stegoTaskAccepted: "-",    // Changed to "-"
            forensicStatus: "-",        // Changed to "-"
            stegoStatus: "-"           // Changed to "-"
        });

        caseIds.push(_caseId);
    }

    function assignTask(
        string memory _caseId,
        string memory _analystType, // "forensic" or "stego"
        string memory _analystName
    ) public {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");

        if (compareStrings(_analystType, "forensic")) {
            cases[_caseId].forensicAnalyst = _analystName;
            cases[_caseId].forensicTaskAssigned = "Yes";
        } else if (compareStrings(_analystType, "stego")) {
            cases[_caseId].stegoAnalyst = _analystName;
            cases[_caseId].stegoTaskAssigned = "Yes";
        }
    }

    function updateTaskStatus(
        string memory _caseId,
        string memory _analystType, // "forensic" or "stego"
        string memory _status,
        string memory _accepted,
        string memory _timestamp
    ) public {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");

        if (compareStrings(_analystType, "forensic")) {
            cases[_caseId].forensicTaskAccepted = _accepted;
            cases[_caseId].forensicStatus = _status;
            cases[_caseId].forensicUpdateTime = _timestamp;
        } else if (compareStrings(_analystType, "stego")) {
            cases[_caseId].stegoTaskAccepted = _accepted;
            cases[_caseId].stegoStatus = _status;
            cases[_caseId].stegoUpdateTime = _timestamp;
        }

        cases[_caseId].status = CaseStatus.Investigating;
    }

   function updateCaseByForensic(
    string memory _caseId, 
    string memory _analystName,
    string memory _FA_Results,
    string memory _timestamp
) public {
    require(bytes(cases[_caseId].caseId).length != 0, "Case not found");
    require(compareStrings(cases[_caseId].forensicAnalyst, _analystName), "Unauthorized analyst");

    cases[_caseId].FA_Results = _FA_Results;
    cases[_caseId].forensicUpdateTime = _timestamp;
    cases[_caseId].status = CaseStatus.Investigating;
}

function updateCaseByStego(
    string memory _caseId, 
    string memory _analystName,
    string memory _SA_Results,
    string memory _timestamp
) public {
    require(bytes(cases[_caseId].caseId).length != 0, "Case not found");
    require(compareStrings(cases[_caseId].stegoAnalyst, _analystName), "Unauthorized analyst");

    cases[_caseId].SA_Results = _SA_Results;
    cases[_caseId].stegoUpdateTime = _timestamp;
    cases[_caseId].status = CaseStatus.Investigating;
}


    function closeCase(string memory _caseId, string memory _report, string memory _timestamp) public {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");

        cases[_caseId].report = _report;
        cases[_caseId].status = CaseStatus.Closed;
        cases[_caseId].closeCaseTime = _timestamp;
    }

    function viewCase(string memory _caseId) public view returns (Case memory) {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");
        return cases[_caseId];
    }

    function viewAllCases() public view returns (Case[] memory) {
        Case[] memory allCases = new Case[](caseIds.length);
        for (uint i = 0; i < caseIds.length; i++) {
            allCases[i] = cases[caseIds[i]];
        }
        return allCases;
    }

    function viewTypeCases(CaseStatus _status) public view returns (Case[] memory) {
        uint count = 0;
        for (uint i = 0; i < caseIds.length; i++) {
            if (cases[caseIds[i]].status == _status) {
                count++;
            }
        }

        Case[] memory filteredCases = new Case[](count);
        uint index = 0;
        for (uint i = 0; i < caseIds.length; i++) {
            if (cases[caseIds[i]].status == _status) {
                filteredCases[index] = cases[caseIds[i]];
                index++;
            }
        }
        return filteredCases;
    }

    // Utility function
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b)));
    }
}