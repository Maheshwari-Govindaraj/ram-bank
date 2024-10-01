# RAM-BANK (Random Access Money Bank)

## Project Overview
RAM-BANK is a modern online banking application designed to replicate the features and workflows of a real-world banking system. It offers a secure and user-friendly platform for customers to manage their accounts, perform transactions, and communicate with bank staff.

The application implements industry-standard security features, including two-factor authentication (2FA) and Google OAuth for user sign-ins, ensuring safe access to sensitive financial data. It also integrates Google Drive for document submission and verification processes, making the account creation workflow smooth and reliable.

## Key Features
- **User Account Creation**: Users can submit account requests along with required documents for approval.
- **Admin Verification**: Bank admins can review and verify user-submitted documents to approve or reject account creation requests.
- **Secure Login**: One-click sign-in using Google OAuth with 2FA for enhanced security.
- **Email Notifications**: Users receive email alerts for important actions such as account creation and document submission.
- **Document Management**: Users can upload documents via the Google Drive API for secure submission and storage.
- **Banking Transactions**: Standard banking operations such as deposits, withdrawals, and transfers, with account balance tracking.
- **Role-Based Access Control**: Separate interfaces for Users, Admins, and Bank Staff, each with tailored functionalities.
- **Custom Domain Integration**: The application is hosted on AWS with a custom domain (`gokulappavu.com`), with subdomains for Users, Admins, and Bank Staff.

## Technical Stack
- **Frontend**: 
  - React.js (with Vite for development)
  - Tailwind CSS for responsive UI
- **Backend**: 
  - Node.js and Express.js for API development
- **Databases**: 
  - MySQL for structured data and transactions
  - MongoDB for unstructured data, including documents
- **Authentication**:
  - Google OAuth for user authentication
  - Google Authenticator for 2FA
- **API Integration**:
  - Google Drive API for secure document uploads
  - Google Sheets API for handling financial data
- **Infrastructure**:
  - Hosted on AWS for scalable cloud deployment
  - Docker for containerization and deployment automation
- **Version Control**: Git and GitHub for source code management and collaboration
- **Testing**: Postman for API testing and documentation

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/ram-bank.git
2. **Install dependencies**:
- ***For the frontend***:
    ```bash
    cd frontend
    npm install
    npm run dev
- ***For the backend***:
    ```bash
    cd backend
    npm install
    npm start
3. **Configure environment variables**:
- Create a .env file in both the frontend and backend directories, and set the necessary environment variables for MySQL, MongoDB, Google OAuth, and Google Drive API integration.

4. **Database setup**:
- Create the necessary MySQL and MongoDB databases:
    - For MySQL, set up the initial schema with users, transactions, and any other required tables.
    - For MongoDB, create collections to store unstructured data, such as documents.
 5. **Run the application**:
- The frontend runs on ```localhost:3000```, and the backend runs on ```localhost:5000```. Ensure both servers are running to access the full application.


## Contribution Guidelines
Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch (```git checkout -b feature-name```).
3. Commit your changes (```git commit -m "Add new feature"```).
4. Push to the branch (```git push origin feature-name```).
5. Create a Pull Request.