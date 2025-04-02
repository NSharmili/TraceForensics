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
            closeCaseTime: "N/A"
        });

        caseIds.push(_caseId);
    }

    function updateCaseByForensic(
        string memory _caseId, 
        string memory _forensicAnalyst, 
        string memory _FA_Results,
        string memory _timestamp
    ) public {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");

        cases[_caseId].forensicAnalyst = _forensicAnalyst;
        cases[_caseId].FA_Results = _FA_Results;
        cases[_caseId].status = CaseStatus.Investigating;
        cases[_caseId].forensicUpdateTime = _timestamp;
    }

    function updateCaseByStego(
        string memory _caseId, 
        string memory _stegoAnalyst, 
        string memory _SA_Results,
        string memory _timestamp
    ) public {
        require(bytes(cases[_caseId].caseId).length != 0, "Case not found");

        cases[_caseId].stegoAnalyst = _stegoAnalyst;
        cases[_caseId].SA_Results = _SA_Results;
        cases[_caseId].status = CaseStatus.Investigating;
        cases[_caseId].stegoUpdateTime = _timestamp;
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
}
