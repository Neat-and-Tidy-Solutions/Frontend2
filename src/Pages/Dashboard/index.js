import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { Form, Formik, Field,  } from "formik";
import * as yup from "yup";

const Dashboard = () => {

    return (
        <div>
    <head>
        {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}
        <title>TripHive Customer Service Tool</title>
        {/* <!-- Add your CSS and JavaScript files here --> */}
    </head>
    <body>
        <header>
            <h1>Customer Dashboard</h1>
        </header>

        <section id="search">
            <label for="search-bar">Search:</label>
            <input type="text" id="search-bar" placeholder="Search by name, booking ID" />
            <button type="submit">Search</button>
        </section>

        <section id="booking-overview">
    <h2>Booking Overview</h2>
        <div class="booking-info">
            <h3>Cleaner Information</h3>
            <p><strong>Name:</strong> <span id="guest-name">John Doe</span></p>
            <p><strong>Address:</strong> <span id="hotel-address">1234 Ocean Drive, Miami, FL 33139</span></p>
            <p><strong>Contact:</strong> <span id="guest-phone">+1 (555) 123-4567</span></p>

            <div class="booking-info">
            <h3>Booking Details</h3>
            <p><strong>Booking ID:</strong> <span id="booking-id">TR123456</span></p>
            <p><strong>Check-in:</strong> <span id="check-in">2023-09-01  10:00am</span></p>
            <p><strong>Check-out:</strong> <span id="check-out">2023-09-01  01:30am</span></p>
            <p><strong>Room Type:</strong> <span id="room-type">Deluxe Ocean View Suite</span></p>
            {/* <p><strong>Number of Guests:</strong> <span id="num-guests">2</span></p> */}
        </div>

        <div class="booking-info">
            <h3>Payment Information</h3>
            <p><strong>Total Amount:</strong> <span id="total-amount">$8,000</span></p>
            <p><strong>Amount Paid:</strong> <span id="amount-paid">$4,000</span></p>
            <p><strong>Payment Status:</strong> <span id="payment-status">50% Paid</span></p>
        </div>
        </div>



        <div class="booking-info">
            <h3>Cleaner Information</h3>
            <p><strong>Name:</strong> <span id="hotel-name">Mat Gram Lorem</span></p>
            <p><strong>Address:</strong> <span id="hotel-address">Yakubu Gowon Crescent, The Three Arms Zone, Asokoro, Abuja, FCT, Nigeria.</span></p>
            <p><strong>Contact:</strong> <span id="hotel-contact">+1 (555) 987-6543</span></p>

            <div class="booking-info">
            <h3>Booking Details</h3>
            <p><strong>Booking ID:</strong> <span id="booking-id">TR234516</span></p>
            <p><strong>Check-in:</strong> <span id="check-in">2023-07-01</span></p>
            <p><strong>Check-out:</strong> <span id="check-out">2023-07-10</span></p>
            <p><strong>Room Type:</strong> <span id="room-type">Aso Rock Villa</span></p>
            {/* <p><strong>Number of Guests:</strong> <span id="num-guests">2</span></p> */}
        </div>

        <div class="booking-info">
            <h3>Payment Information</h3>
            <p><strong>Total Amount:</strong> <span id="total-amount">$15,000</span></p>
            <p><strong>Amount Paid:</strong> <span id="amount-paid">$7,500</span></p>
            <p><strong>Payment Status:</strong> <span id="payment-status">50% Paid</span></p>
        </div>
        </div>
        
        {/* <div class="booking-info">
            <h3>Payment Information</h3>
            <p><strong>Total Amount:</strong> <span id="total-amount">$2,500</span></p>
            <p><strong>Amount Paid:</strong> <span id="amount-paid">$1,250</span></p>
            <p><strong>Payment Status:</strong> <span id="payment-status">50% Paid</span></p>
        </div */}
        <div class="booking-info">
            <h3>Special Requests</h3>
            <p id="special-requests">Late check-in at 10 PM. Allergy-friendly room.</p>
        </div>    </section>




        <section id="email-communication">
    <h2>Email Communication</h2>
    <div class="chat-container">
        <div class="chat-message customer-message">
        <div class="message-info">
            <p><strong>Customer:</strong> Aisha </p>
            <p><strong>Date:</strong> 2023-03-12 2:30 PM</p>
        </div>
        <div class="message-content">
            <p>Hi, I would like to know if it's possible to request an early check-in?</p>
        </div>
        </div>
        <div class="chat-message support-message">
        <div class="message-info">
            <p><strong>Support:</strong> Jane Smith</p>
            <p><strong>Date:</strong> 2023-03-12 3:00 PM</p>
        </div>
        <div class="message-content">
            <p>Hello Aisha, I will contact the management and ask if they can accommodate an early check-in for you. I will get back to you as soon as I have a response.</p>
        </div>
        </div>
        <div class="chat-message customer-message">
        <div class="message-info">
            <p><strong>Customer:</strong> Aisha</p>
            <p><strong>Date:</strong> 2023-03-13 10:00 AM</p>
        </div>
        <div class="message-content">
            <p>Thank you, I appreciate your help.</p>
        </div>
        </div>
        <div class="chat-message support-message">
        <div class="message-info">
            <p><strong>Support:</strong> Jane Smith</p>
            <p><strong>Date:</strong> 2023-03-13 11:15 AM</p>
        </div>
        <div class="message-content">
            <p>Hi Aisha, I have received a response from the management. They have confirmed that an early check-in is possible for your booking. Please let me know if you need any further assistance.</p>
        </div>
        </div>
    </div>

    <div class="chat-input">
        <form id="send-message-form">
        <label for="message-input">Your Message:</label>
        <textarea id="message-input" name="message-input" rows="4"></textarea>
        <button type="submit" id="send-message">Send Message</button>
        </form>
    </div>
    </section>


        <section id="email-templates">
    <h2>Email Templates</h2>
    <div class="templates-container">
        <div class="template">
        <h3>Booking Confirmation</h3>
        <pre>
            <code>
    Dear Aisha,

    Thank you for choosing to book with us at NJTS!<br />Your booking is now confirmed. Here are the details:<br />
    Booking ID: TR234516<br />
    Check-in: 2023-07-01<br />
    Check-out: 2023-07-10<br />
    Room type: Aso Rock Villa<br />
    {/* Number of guests: [Guests Number]<br /> */}
    Total price: $15,000<br />

    Please do not hesitate to contact us if you have any questions or special requests.<br />We look forward to hosting you soon.

    Best regards,
    NJTS
            </code>
        </pre>
        <button>Edit Template</button>
        </div>


        {/* <div class="template">
        <h3>Cancellation Confirmation</h3>
        <pre>
            <code>
    Dear [Guest Name],

    We are sorry to hear that you had to cancel your booking at [Hotel Name]. We have processed your cancellation and you will receive a refund according to our cancellation policy.

    Booking ID: [Booking ID]
    Cancellation Date: [Cancellation Date]
    Refund Amount: [Refund Amount]

    If you have any questions or concerns, please feel free to contact us. We hope to have the opportunity to host you in the future.

    Best regards,
    [Hotel Name]
            </code>
        </pre>
        <button>Edit Template</button>
        </div> */}
        {/* <!-- Add more email templates here --> */}
    </div>
    </section>


    {/* <section id="attachment-support">
    <h2>Attachment Support</h2>
    <div class="attachment-container">
        <form id="attachment-upload-form">
        <label for="attachment-file">Upload an attachment:</label>
        <input type="file" id="attachment-file" name="attachment-file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
        <button type="submit">Upload</button>
        </form>
        <div class="attachments-list">
        <h3>Attachments:</h3>
        <ul>
            <li>
            <div class="attachment">
                <span class="attachment-name">Filename.pdf</span>
                <button class="download-button">Download</button>
                <button class="delete-button">Delete</button>
            </div>
            </li>
            {/* <!-- Add more attachments here --> */}
        {/* </ul>
        </div>
    </div>
    </section> */}

    {/* <section id="internal-notes">
    <h2>Internal Notes</h2>
    <div class="notes-container">
        <form id="add-note-form">
        <label for="note-text">Add a new note:</label>
        <textarea id="note-text" name="note-text" rows="4" cols="50" placeholder="Write your note here"></textarea>
        <button type="submit">Add Note</button>
        </form>
        <div class="notes-list">
        <h3>Notes:</h3>
        <ul>
            <li>
            <div class="note">
                <div class="note-header">
                <span class="note-author">John Doe</span>
                <span class="note-date">2023-03-14 10:30</span>
                </div>
                <p class="note-content">This is an example note.</p>
            </div>
            </li>
            {/* <!-- Add more notes here --> */}
        {/* </ul>
        </div>
    </div>
    </section> */}


    {/* <!-- Task Assignment --> */}
    {/* <section id="task-assignment">
    <h2>Task Assignment</h2>
    <form id="assign-task-form">
        <label for="task-select">Assign task to:</label>
        <select id="task-select" name="task-select">
        <option value="employee1">Employee 1</option>
        <option value="employee2">Employee 2</option>
        {/* <!-- Add more employees here --> */}
        {/* </select>
        <button type="submit">Assign Task</button>
    </form>
    </section> */} 

    {/* <!-- Escalation Options --> */}
    {/* <section id="escalation-options">
    <h2>Escalation Options</h2>
    <form id="escalate-form">
        <label for="escalate-select">Escalate to:</label>
        <select id="escalate-select" name="escalate-select">
        <option value="supervisor1">Supervisor 1</option>
        <option value="supervisor2">Supervisor 2</option>
        {/* <!-- Add more supervisors here --> */}
        {/* </select>
        <button type="submit">Escalate</button>
    </form>
    </section> */} 

    {/* <!-- Reporting Analytics -->
    <!-- Reporting Analytics --> */}
    {/* <section id="reporting-analytics">
    <h2>Reporting Analytics</h2>
    <div class="analytics-container">
        <div class="analytics-chart">
        <h3>Resolved Issues</h3>
        <canvas id="resolved-issues-chart"></canvas>
        </div>
        <div class="analytics-chart">
        <h3>Average Response Time</h3>
        <canvas id="response-time-chart"></canvas>
        </div>
        <div class="analytics-chart">
        <h3>Customer Satisfaction</h3>
        <canvas id="customer-satisfaction-chart"></canvas>
        </div>
    </div>
    </section> */}


        
        <footer>
            <p>&copy; NJTS</p>
        </footer>
    </body>

    </div>

    );
       
    }
    
    export default Dashboard;

    // {/* < class="bg-light"> */}
    // <header class="px-3 py-2 border-bottom shadow-sm bg-white">
    //     <div class="container">
    //         <div class="d-flex flex-nowrap align-items-center justify-content-between">
    //             <div class="d-flex gap-2 justify-content-end">
    //             <button type="button" class="btn btn-secondary">Account: @StudioKonKon</button>
    //             </div>
    //             <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
    //             <img class="me-2 rounded-circle border"
    //                     src="https://assets.codepen.io/2598789/internal/avatars/users/default.png?fit=crop&format=auto&height=32&width=32"
    //                     width="32"
    //                     height="32"
    //                     role="img"
    //                     aria-label="Bootstrap" />
    //             </a>
    //         </div>
    //     </div>
    // </header>
    // <div class="container py-5">
    //     <h1 class="display-6 mb-5">My Account</h1>
    //     <h4 class="mb-3"><i class="zmdi zmdi-eye me-2"></i>Overview</h4>
    //     <div class="row g-4 mb-5">
    //         <div class="col-12">
    //             <div class="card">
    //             <div class="card-body">
    //                 <h4 class="card-title mb-2">Services</h4>
    //                 <div><span class="fs-3 fw-bolder me-2">$49.99</span><span>per month</span></div>
    //                 <p class="small card-text">Includes line-rental, discounts and bolt-ons</p>
    //             </div>
    //             </div>
    //         </div>
    //         <div class="col-12 col-md-6">
    //             <div class="card h-100 bg-secondary text-white">
    //             <div class="card-body">
    //                 <h4 class="card-title mb-2">Outstanding balance</h4>
    //                 <div><span class="fs-3 fw-bolder me-2">$0.00</span><span>via Direct Debit</span></div>
    //                 <p class="small mb-0">Last bill date: 1 December 2021</p>
    //             </div>
    //             <div class="card-footer bg-secondary hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-outline-light">View Direct Debit</button>
    //             </div>
    //             </div>
    //         </div>
    //         <div class="col-12 col-md-6">
    //             <div class="card h-100">
    //             <div class="card-body">
    //                 <h4 class="card-title mb-2">Latest bill</h4>
    //                 <div><span class="fs-3 fw-bolder me-2">$49.99</span><span>Paid</span></div>
    //                 <p class="small mb-0">Bill date: 1 December 2021</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Latest bill</button>
    //                 <button class="btn btn-outline-secondary">Bill history</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     <h4 class="mb-3"><i class="zmdi zmdi-laptop me-2"></i>Services</h4>
    //     <div class="row g-4 mb-5">
    //         <div class="col-12 col-md-6">
    //             <div class="card h-100">
    //             <img src="https://images.unsplash.com/photo-1637603460405-3c86307993aa?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzOTA4NDYyNA&ixlib=rb-1.2.1&q=85&fit=crop&w=auto&h=400" class="card-img-top" />
    //             <div class="card-body">
    //                 <h4 class="mb-3"><i class="zmdi zmdi-router me-2"></i>Broadband</h4>
    //                 <p class="mb-0">View your data usage and your daily breakdown.</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Manage</button>
    //                 <button class="btn btn-outline-secondary">Parental controls</button>
    //             </div>
    //             </div>
    //         </div>
    //         <div class="col-12 col-md-6">
    //             <div class="card h-100">
    //             <img src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzOTA4NTI3Ng&ixlib=rb-1.2.1&q=85&fit=crop&w=auto&h=400" class="card-img-top" />
    //             <div class="card-body">
    //                 <h4 class="mb-3"><i class="zmdi zmdi-phone me-2"></i>Phone</h4>
    //                 <p class="mb-0">See your recent calls and recent history.</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Phone service</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     <h4 class="mb-3"><i class="zmdi zmdi-headset me-2"></i>Support</h4>
    //     <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
    //         <div class="col">
    //             <div class="card h-100">
    //             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzOTA4NTYxMQ&ixlib=rb-1.2.1&q=85&fit=crop&w=auto&h=400" class="card-img-top" />
    //             <div class="card-body">
    //                 <h4 class="mb-3"><i class="zmdi zmdi-headset me-2"></i>Help and support</h4>
    //                 <p class="mb-0">Find help and support information.</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Help and support</button>
    //             </div>
    //             </div>
    //         </div>
    //         <div class="col">
    //             <div class="card h-100">
    //             <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzOTA4NTc1MA&ixlib=rb-1.2.1&q=85&fit=crop&w=auto&h=400" class="card-img-top" />
    //             <div class="card-body">
    //                 <h4 class="mb-3"><i class="zmdi zmdi-comments me-2"></i>Live chat</h4>
    //                 <p class="mb-0">Chat with one of our experts.</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Live chat</button>
    //             </div>
    //             </div>
    //         </div>
    //         <div class="col">
    //             <div class="card h-100">
    //             <img src="https://images.unsplash.com/photo-1603539240352-8f2cce3257c4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzOTA4NTgxNg&ixlib=rb-1.2.1&q=85&fit=crop&w=auto&h=400" class="card-img-top" />
    //             <div class="card-body">
    //                 <h4 class="mb-3"><i class="zmdi zmdi-email me-2"></i>Email us</h4>
    //                 <p class="mb-0">Email us with your question.</p>
    //             </div>
    //             <div class="card-footer hstack flex-wrap gap-2 pt-0 pb-4">
    //                 <button class="btn btn-primary">Email us</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     <footer class="footer hstack gap-3 small" role="contentinfo">
    //         <div>Company Name &copy; 2021</div>
    //         <div class="vr"></div>
    //         <a href="#" rel="noopener" title="Change your cookie preferences">Cookie preferences</a>
    //         <div class="small version ms-auto">10.12.21 fda49b5</div>
    //     </footer>
    // </div>


        // </div>


//   state = {
//     customerName: '',
//     cleaningServices: [
//       { id: 1, name: 'Room Cleaning', price: 20 },
//       { id: 2, name: 'Industrial Cleaning', price: 50 },
//       { id: 3, name: 'Office Cleaning', price: 30 },
//       { id: 4, name: 'Site Cleaning', price: 70 },
//     ],
//     searchQuery: '',
//     loggedIn: true,
//     selectedCleaner: null,
//     selectedCleaning: null,
//     paymentConfirmed: false,
//     settingsOpen: false,
//   };

//   componentDidMount() {
//     const customerName = 'NTJS';
//     this.setState({ customerName });
//   }

//   handleSearch = (event) => {
//     const searchQuery = event.target.value;
//     this.setState({ searchQuery });
//   };

//   handleLogout = () => {
//     // Perform logout actions
//     this.setState({ loggedIn: false });
//   };

//   handleSelectCleaner = (cleaner) => {
//     this.setState({ selectedCleaner: cleaner });
//   };

//   handleSelectCleaning = (cleaning) => {
//     this.setState({ selectedCleaning: cleaning });
//   };

//   handleConfirmOrder = () => {
//     // Perform order confirmation actions
//     this.setState({ paymentConfirmed: true });
//   };

//   handleSettingsToggle = () => {
//     this.setState((prevState) => ({
//       settingsOpen: !prevState.settingsOpen,
//     }));
//   };

//   render() {
//     const {
//       customerName,
//       cleaningServices,
//       searchQuery,
//       loggedIn,
//       selectedCleaner,
//       selectedCleaning,
//       paymentConfirmed,
//       settingsOpen,
//     } = this.state;

//     if (!loggedIn) {
//       // Redirect to login page or show a login component
//       return <p>Please log in to access the dashboard.</p>;
//     }

//     const filteredServices = cleaningServices.filter((service) =>
//       service.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//       <div className="dashboard">
//         <div className="top-bar">
//           <h1>Welcome, <br />{customerName}!</h1>

          
//             <button>Payment</button>
//             <button onClick={this.handleLogout}>Logout</button>
         
//         </div>
    
//         {settingsOpen && (
//           <div className="settings-container">
//             <h2>Settings Page</h2>
//             {/* Add your settings components and logic here */}
//           </div>
//         )}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search cleaning services..."
//             value={searchQuery}
//             onChange={this.handleSearch}
//           />
//         </div>

        


//         <h2>Cleaning Services and Prices:</h2>
//         {filteredServices.length > 0 ? (
//           <ul className="cleaning-services-list">
//             {filteredServices.map((service) => (
//               <li key={service.id}>
//                 {service.name}: ${service.price}
//                 <button onClick={() => this.handleSelectCleaner(service)}>Order</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No cleaning services found.</p>
//         )}
//         {selectedCleaner && (
//           <div className="selected-cleaner-container">
//             <h3>Selected Cleaner:</h3>
//             <p>Name: {selectedCleaner.name}</p>
//             <p>Price: ${selectedCleaner.price}</p>
//             {!paymentConfirmed ? (
//               <button onClick={this.handleConfirmOrder}>Confirm Order</button>
//             ) : (
//               <p>Payment Confirmed!</p>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }


