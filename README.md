<h1>TraceForensics</h1>


<p style="text-align: right;">The increasing complexity of cybercrimes presents significant challenges for cybercrime investigators, particularly in recovering, preserving, and authenticating critical digital evidence. Cybercriminals often use data-hiding techniques like LSB steganography to conceal sensitive information within digital images, such as illicit transactions or confidential data, making detection and analysis extremely difficult. Traditional investigation methods may recover deleted files but often fail to retrieve permanently deleted data and do not ensure the integrity and traceability of evidence throughout the investigation process. The proposed research work, TraceForensics, addresses these limitations by integrating forensic analysis with blockchain technology to securely recover, extract, store, and manage digital evidence. The TraceForensics framework involves three key roles: the Case Investigator, the Forensic Analyst, and the Steganography Analyst. The Case Investigator registers the case and uses tools such as Ganache, MetaMask, Remix, and Truffle to manage case records on a blockchain. The suspect's device (laptop, hard drive, or USB) is handed over to the Forensic Analyst, who uses the Autopsy forensic tool to recover deleted files, updates the case with file names and paths, and notifies the investigator upon completion. The Case Investigator then consults the Steganography Analyst, who acts as a cryptanalyst to decode steganography and extract hidden data from the recovered images. The analyst updates the case with the extracted information and informs the investigator. All digital evidence is securely stored on a tamper-proof, transparent, and legally admissible blockchain framework, ensuring the data remains intact and trustworthy throughout the investigation. By combining forensic tools and blockchain technology, TraceForensics delivers a secure, innovative, and reliable solution for digital evidence management, enabling more effective cybercrime investigations and encouraging adoption of this prototype in real-world scenarios to ensure justice through secure and trustworthy digital evidence.<p>

## Table of Contents  
1. [Introduction](#introduction)  
2. [Architecture Diagram](#architecture-diagram)  
3. [Ganache Installation](#ganache-installation)  
4. [Autopsy Installation](#autopsy-installation)  
5. [Digital Forensics Tools, Libraries, and Frameworks](#digital-forensics-tools-libraries-and-frameworks)  
6. [Features](#features)  
7. [Directory Structure](#directory-structure)
   

## 1. Introduction  
<p>In today's digital landscape, cybercrimes have become increasingly complex, posing significant challenges to cybersecurity and digital investigations. Criminals use sophisticated methods to evade detection, making it difficult for forensic investigators to recover, verify, and preserve critical evidence. One of the most concerning trends is the use of steganography, where illicit data such as financial transactions, malicious commands, or confidential information is secretly embedded within digital images or multimedia files. While traditional forensic tools can recover deleted files, they often lack the ability to ensure the security, authenticity, and traceability of evidence throughout an investigation. This limitation creates major legal and technical obstacles in prosecuting cybercriminals, necessitating a more reliable and transparent approach to digital evidence management.
Several real-world incidents highlight the importance of a secure and tamper-proof forensic investigation framework. One such case is the Silk Road darknet marketplace, a hidden online platform used for illegal drug trade and other illicit activities. Cybercriminals communicated through encrypted messages embedded in digital images, making it difficult for law enforcement to trace their transactions. Investigators faced significant challenges in detecting these hidden messages and gathering legally admissible evidence.

Another significant case is the 2014 Sony Pictures cyberattack, where hackers infiltrated the company's systems and leaked vast amounts of sensitive data. The attackers concealed malicious payloads within seemingly harmless files, allowing them to bypass security measures and access confidential corporate information. This breach demonstrated how cybercriminals exploit digital content to conduct large-scale attacks while leaving minimal forensic traces.
Furthermore, ransomware attacks such as the 2017 WannaCry outbreak have shown how attackers use encryption and covert techniques to extort victims. The ransomware spread rapidly across networks, encrypting crucial data and demanding ransom payments in cryptocurrency. Investigators struggled to track the perpetrators due to the sophisticated methods used to obfuscate their digital footprint, underscoring the need for more effective forensic tools.
 
To address these challenges, our research work, TraceForensics, integrates forensic analysis with blockchain technology to create a secure, immutable, and transparent framework for handling digital evidence. The system operates in two key stages. First, TraceForensics allows investigators to recover deleted files and extract hidden data using specialized steganographic analysis techniques. This ensures that even deeply embedded information can be accurately retrieved and examined. Second, unlike traditional forensic tools that lack comprehensive evidence integrity mechanisms, our system securely records all case-related data on a blockchain. Blockchain technology guarantees that every piece of digital evidence remains unaltered, verifiable, and traceable. By establishing a decentralized ledger of forensic data, TraceForensics provides an auditable and legally admissible record of evidence, strengthening the credibility of cybercrime investigations.
By integrating forensic methodologies with blockchain’s security features, TraceForensics enhances the accuracy and effectiveness of digital forensic investigations. The system ensures that digital evidence remains intact throughout the investigative and legal process, ultimately improving cybercrime prosecution and upholding justice. Our research encourages forensic professionals and law enforcement agencies to adopt this prototype, paving the way for a more secure and transparent digital forensic ecosystem.<p>

<h2 id="architecture-diagram"> 2. Architecture Diagram</h2>
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/6f4b2ddefc2923abf2c5901d7b558977a753a00a/Screenshot%202025-04-11%20113249.png" 
     alt="Architecture Diagram" width="600">
<p>This diagram illustrates the workflow of TraceForensics, integrating file recovery, steganography detection, and blockchain-based evidence management.</p>
<p>The proposed blockchain-based cybercrime investigation system comprises four key modules: User Registration, Case Entry, and Evidence Management. It ensures secure, tamper-proof handling of digital evidence and case details by leveraging blockchain’s transparency and immutability.</p>

 
## 3. Ganache Installation  
<h5>Step 1: Install Ganache</h5>

<p><strong>I. Download Ganache from the official Truffle Suite website:</strong>  
👉 <a href="https://trufflesuite.com/ganache/" target="_blank">Ganache Download</a></p>

<p><strong>II. Install it</strong> by following the on-screen instructions for your OS (Windows, macOS, or Linux).</p>

<p><strong>III. Open Ganache</strong> and create a new workspace or use the quickstart option to start a blockchain instance.</p>


## 4. Autopsy Installation
<p><strong>I. Download Autopsy</strong></p>
<p>Go to the official website: <a href="https://www.autopsy.com/download/" target="_blank">Autopsy Download</a></p>
<p>Click on the Windows installer (.exe) and download it.</p>

<p><strong>II. Run the Installer</strong></p>
<p>Locate the downloaded .exe file and double-click to start the installation.</p>
<p>Follow the on-screen instructions and accept the license agreement.</p>

<p><strong>III. Complete Installation</strong></p>
<p>Choose the installation directory (default is usually fine).</p>
<p>Click Install and wait for the process to finish.</p>

<p><strong>IV. Launch Autopsy</strong></p>

<p><strong>Data Recovery in Autopsy:</strong></p>
<p>Create a New Case → Add Data Source → Browse for Deleted Files → Use Keyword Search or Data Carving → Extract Recovered Files ✅</p>


## 5. Digital Forensics Tools and Frameworks
<p><strong>A. Forensic Tool: Autopsy</strong></p>
<p>Autopsy is an open-source forensic tool used to recover deleted files. The process involves creating a new case, specifying the location (e.g., drive, folder, or external device), and scanning for deleted files. Autopsy extracts metadata and recovers lost data, ensuring critical evidence is preserved and analyzed effectively.</p>
<p><strong>B. Frameworks</strong></p>
<p>The front end of the system was developed using Flask, a lightweight and versatile Python web framework. Flask was chosen for its simplicity and its ability to integrate seamlessly with Python-based backend solutions. HTML, CSS, and JavaScript were used to design and enhance the user interface, ensuring a responsive and user-friendly design.</p>


## 6. Features 
<p><strong>1. Integrated System:</strong> TraceForensics combines file recovery, steganography detection, and blockchain security into a unified platform, enabling investigators to efficiently recover, analyze, and secure evidence within a single workflow.</p>

<p><strong>2. Secure Evidence Handling:</strong> The system guarantees that recovered files remain authentic and unaltered. By using secure encryption and blockchain-based storage, it prevents tampering and ensures the integrity of evidence throughout the investigation.</p>

<p><strong>3. Steganography Detection:</strong> TraceForensics includes advanced tools to detect and decode hidden data within digital files. This is essential for uncovering illicit information, such as financial transactions or communications, that may be concealed using steganographic methods.</p>

<p><strong>4. Blockchain-Based Storage:</strong> The platform uses blockchain technology to store all case details and forensic actions in a secure, immutable ledger. This provides tamper-proof evidence management, ensuring that the integrity of the evidence is maintained, and creating a transparent, auditable record for legal use.</p>


## 7. Directory Structure
<p><strong>Steps to Deploy Smart Contracts to Ganache Using Truffle:</strong></p>

<p><strong>1. Download Node.js:</strong> Visit the official site: <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a></p>

<p><strong>2. Install Node.js:</strong> Follow the setup wizard and ensure the "Add to PATH" option is checked.</p>

<p><strong>3. Verify Installation:</strong> Open Command Prompt (cmd) or PowerShell and run:</p>

<pre>
node -v  # Check Node.js version
npm -v   # Check npm version
</pre>

<img src="https://github.com/NSharmili/TraceForensics/blob/2104a1d6f0aa22ca39e5a7b693e99ed49e85ff91/Screenshot%202025-03-12%20133113.png?raw=true" alt="Image Alt Text" width="500">
<p><strong>1. Install Truffle Globally:</strong></p>
<pre>npm install -g truffle</pre>

<p><strong>2. Verify Truffle Installation:</strong></p>
<pre>truffle version</pre>

<img src="https://github.com/NSharmili/TraceForensics/blob/33fe4954ebe67eb20af280fcc05734e1739a88b9/Screenshot%202025-03-12%20135659.png?raw=true" alt="Image Description" width="500">
<p><strong>1. Steps to Create a Truffle Project:</strong></p>

<p><strong>2. Navigate to the D: drive:</strong></p>
<pre>cd /d D:</pre>

<p><strong>3. Change directory to truffle:</strong></p>
<pre>cd truffle</pre>

<p><strong>4. Create a new project folder named SimpleStorageProject:</strong></p>
<pre>mkdir SimpleStorageProject</pre>

<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/8556e3e0cd47b893c7b02dd8030de29815f35591/Screenshot%202025-03-12%20155851.png" 
     alt="Screenshot" width="500">
<p><strong>5. Initialize a new Truffle project:</strong></p>
<pre>truffle init</pre>

<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/73c0c96fb6fec14aa515b8707f56b8b0e72786ba/Screenshot%202025-03-12%20160248.png" 
     alt="Screenshot" width="500">
     
<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/b70c46822dc7ed7ff9ce3feb6d3cba105aeb9e47/Screenshot%202025-03-12%20160943.png" 
     alt="Screenshot" width="500">
<p><strong>6. Compile the Contract:</strong></p>
<pre>truffle compile</pre>

<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/a0ebc0ae9397ff2a0d2701198764f8497fe31b52/Screenshot%202025-03-12%20161429.png" 
     alt="Screenshot" width="500">
<p><strong>Deploy to Ganache:</strong></p>
<pre>truffle migrate --network development</pre>

<img src="https://raw.githubusercontent.com/NSharmili/TraceForensics/d14b8e4758451ca56a637f7d30b4f10390e6ed29/Screenshot%202025-03-12%20161806.png" 
     alt="Screenshot" width="500">













