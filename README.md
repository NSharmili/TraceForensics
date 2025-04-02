<h1>TraceForensics</h1>


<h5>Cybercrimes are becoming more advanced, making it difficult for investigators to find and protect digital evidence. Cybercriminals use steganography to hide illegal data within digital files, making detection and recovery challenging. They often delete these files to erase evidence, further complicating investigations. To address this, this research introduces TraceForensics, a blockchain-based cybercrime investigation system designed to securely manage digital evidence. It operates in three key phases: Encoding, where hidden data is embedded in images; Decoding, where stegoanalysts extract concealed messages using forensic techniques; and Evidence Management, where investigators recover deleted files and store case details on a tamper-proof blockchain to ensure security and legal validity. The system involves Administrators, Investigators, Evidence Managers, and Judicial Authorities, ensuring a transparent and secure investigation process. By integrating stegoanalysis, forensic tools, and blockchain technology, TraceForensics enhances cybercrime investigations, ensuring evidence remains authentic, traceable, and tamper-proof.</h5>

## Table of Contents  
1. [Introduction](#introduction)  
2. [Installation](#installation)  
3. [Digital Forensics Tools, Libraries, and Frameworks](#digital-forensics-tools-libraries-and-frameworks)  
4. [Features](#features)  
5. [Directory Structure](#directory-structure)  
6. [Contributing](#contributing)  
7. [License](#license)

## 1 Introduction  
<h5>In today's digital landscape, cybercrimes have become increasingly complex, posing significant challenges to cybersecurity and digital investigations. Criminals use sophisticated methods to evade detection, making it difficult for forensic investigators to recover, verify, and preserve critical evidence. One of the most concerning trends is the use of steganography, where illicit data such as financial transactions, malicious commands, or confidential information is secretly embedded within digital images or multimedia files. While traditional forensic tools can recover deleted files, they often lack the ability to ensure the security, authenticity, and traceability of evidence throughout an investigation. This limitation creates major legal and technical obstacles in prosecuting cybercriminals, necessitating a more reliable and transparent approach to digital evidence management.
Several real-world incidents highlight the importance of a secure and tamper-proof forensic investigation framework. One such case is the Silk Road darknet marketplace, a hidden online platform used for illegal drug trade and other illicit activities. Cybercriminals communicated through encrypted messages embedded in digital images, making it difficult for law enforcement to trace their transactions. Investigators faced significant challenges in detecting these hidden messages and gathering legally admissible evidence.


Another significant case is the 2014 Sony Pictures cyberattack, where hackers infiltrated the company's systems and leaked vast amounts of sensitive data. The attackers concealed malicious payloads within seemingly harmless files, allowing them to bypass security measures and access confidential corporate information. This breach demonstrated how cybercriminals exploit digital content to conduct large-scale attacks while leaving minimal forensic traces.
 Furthermore, ransomware attacks such as the 2017 WannaCry outbreak have shown how attackers use encryption and covert techniques to extort victims. The ransomware spread rapidly across networks, encrypting crucial data and demanding ransom payments in cryptocurrency. Investigators struggled to track the perpetrators due to the sophisticated methods used to obfuscate their digital footprint, underscoring the need for more effective forensic tools.
To address these challenges, our research work, TraceForensics, integrates forensic analysis with blockchain technology to create a secure, immutable, and transparent framework for handling digital evidence. The system operates in two key stages. First, TraceForensics allows investigators to recover deleted files and extract hidden data using specialized steganographic analysis techniques. This ensures that even deeply embedded information can be accurately retrieved and examined. Second, unlike traditional forensic tools that lack comprehensive evidence integrity mechanisms, our system securely records all case-related data on a blockchain. Blockchain technology guarantees that every piece of digital evidence remains unaltered, verifiable, and traceable. By establishing a decentralized ledger of forensic data, TraceForensics provides an auditable and legally admissible record of evidence, strengthening the credibility of cybercrime investigations.
By integrating forensic methodologies with blockchain’s security features, TraceForensics enhances the accuracy and effectiveness of digital forensic investigations. The system ensures that digital evidence remains intact throughout the investigative and legal process, ultimately improving cybercrime prosecution and upholding justice. Our research encourages forensic professionals and law enforcement agencies to adopt this prototype, paving the way for a more secure and transparent digital forensic ecosystem.<h5>
 
## Installation  
<h5>Step 1: Install Ganache</h5>
<h5>1.Download Ganache from the official Truffle Suite website:
👉 Ganache Download</h5>
<h5>2.Install it by following the on-screen instructions for your OS (Windows, macOS, or Linux).</h5>
<h5>3.Open Ganache and create a new workspace or use the quickstart option to start a blockchain instance.</h5>

## Digital Forensics Tools, Libraries, and Frameworks
<h5>A. Forensic Tool: Autopsy</h5>
<h5>Autopsy is an open-source forensic tool used to recover deleted files. The process involves creating a new case, specifying the location (e.g., drive, folder, or external device), and scanning for deleted files. Autopsy extracts metadata and recovers lost data, ensuring critical evidence is preserved and analyzed effectively.</h5>
<h5>Frameworks</h5>
<h5>The front end of the system was developed using Flask, a lightweight and versatile Python web framework. Flask was chosen for its simplicity and its ability to integrate seamlessly with Python-based backend solutions. HTML, CSS, and JavaScript were used to design and enhance the user interface, ensuring a responsive and user-friendly design.
</h5>



## Features  
<h5>1.Integrated System: TraceForensics combines file recovery, steganography detection, and blockchain security into a unified platform, enabling investigators to efficiently recover, analyze, and secure evidence within a single workflow.</h5>

<h5>2.Secure Evidence Handling: The system guarantees that recovered files remain authentic and unaltered. By using secure encryption and blockchain-based storage, it prevents tampering and ensures the integrity of evidence throughout the investigation.</h5>

<h5>3.Steganography Detection: TraceForensics includes advanced tools to detect and decode hidden data within digital files. This is essential for uncovering illicit information, such as financial transactions or communications, that may be concealed using steganographic methods.</h5>

<h5>4.Blockchain-Based Storage: The platform uses blockchain technology to store all case details and forensic actions in a secure, immutable ledger. This provides tamper-proof evidence management, ensuring that the integrity of the evidence is maintained, and creating a transparent, auditable record for legal use.</h5>

## Directory Structure

<h5>Steps to Deploy Smart Contracts to Ganache Using Truffle:</h5>
<h5>1.Download Node.js
Visit the official site: https://nodejs.org/</h5>
<h5>2.Install Node.js
Follow the setup wizard and ensure the "Add to PATH" option is checked.</h5>
<h5></h5>3.Verify Installation
Open Command Prompt (cmd) or PowerShell and run:
node -v  # Check Node.js version
npm -v   # Check npm version</h5>
<img src="https://github.com/NSharmili/TraceForensics/blob/2104a1d6f0aa22ca39e5a7b693e99ed49e85ff91/Screenshot%202025-03-12%20133113.png?raw=true" alt="Image Alt Text" width="500">
<h5>1.Install Truffle Globally</h5>
<h5>npm install -g truffle</h5>
<h5>2.Verify Truffle Installation</h5>
<h5>truffle version</h5>
<img src="https://github.com/NSharmili/TraceForensics/blob/33fe4954ebe67eb20af280fcc05734e1739a88b9/Screenshot%202025-03-12%20135659.png?raw=true" alt="Image Description" width="500">
<h5>1.Steps to Create a Truffle Project</h5>
<h5>2.Navigate to the D: drive</h5>
<h5>3.Change directory to truffle</h5>
<h5>4.Create a new project folder named SimpleStorageProject</h5>
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/8556e3e0cd47b893c7b02dd8030de29815f35591/Screenshot%202025-03-12%20155851.png" 
     alt="Screenshot" width="500">
<h5>5.Initialize a new Truffle project</h5>
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/73c0c96fb6fec14aa515b8707f56b8b0e72786ba/Screenshot%202025-03-12%20160248.png" 
     alt="Screenshot" width="500">
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/b70c46822dc7ed7ff9ce3feb6d3cba105aeb9e47/Screenshot%202025-03-12%20160943.png" 
     alt="Screenshot" width="500">
<h5>6.Compile the Contract</h5>
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/a0ebc0ae9397ff2a0d2701198764f8497fe31b52/Screenshot%202025-03-12%20161429.png" 
     alt="Screenshot" width="500">
<h5>Deploy to Ganache</h5>
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/d14b8e4758451ca56a637f7d30b4f10390e6ed29/Screenshot%202025-03-12%20161806.png" 
     alt="Screenshot" width="500">













