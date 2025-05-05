# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Staff Dashboard Assessment: 

Setup Instructions 


1. Clone the Repository 

git clone https://github.com/roshanarich/staff-dashboard.git 


2. Navigate to the Project Folder 

cd staff-dashboard 

3. Install Dependencies 

Install the required dependencies (React, Vite, Tailwind CSS, Lucide-react, React DOM, React router DOM ,React Calendar, and other packages) by running first: 

npm install 

 4. Run the Development Server 

After the dependencies are installed, you can start the development server with: 

npm run dev 
 

5. Access the Project 

Open your browser and go to http://localhost:???? to view the project. 

 

Additional Notes: 

React and React DOM are automatically handled by Vite 

Tailwind CSS is used for styling, with tailwind.config.js 

Lucide-react provides icons  

React Calendar  

 

Summary of Features Completed 

1. Sidebar Navigation 

A collapsible left sidebar with navigation links for: 

Home 

Staff Directory 

IT Requests 

Tickets 

To-Do List 

Settings 

The sidebar has icons and it expands with a hovering feature or a clicking motion for better UX. 

2. Staff Directory Page 

Displays a card list of staff members with the following information: 

Name 

Role 

Email 

Status (Active/Inactive) 

Last login (formatted timestamp) 

Drive usage (shown as a progress bar) 

Device status 

It has a grid layout with hover effects 

Placeholder profile images and a "View Details" button 

3. To-Do List 

A to-do list manager: 

Add new tasks 

Edit existing tasks 

Delete tasks 

Toggle task completion 

Tasks are displayed with a clean layout and status indicators. 

Includes validation to prevent empty entries. 

4. TopBar 

Persistent top bar  

Positioned so that it doesn’t shift when the sidebar opens or closes. 

5. Responsive Design 

Fully responsive layout compatible with desktops, tablets, and smaller mobile screens. 

Adjusts grid and spacing based on screen width. 

 

Assumptions Made 

Static User Data: The application currently uses mock data stored in a staff.json file. In a production system, this would be gathered by other means eg. via API. 

No Authentication Flow: It’s assumed that the admin is already logged in. There is also no login/logout or permission handling has been implemented yet. 

Drive Usage: These have been added as placeholder values. Integration with Google Workspace APIs has not yet been implemented. 

UI/UX Scope: UI has intentionally been kept minimal and functional for demonstration purposes> However there is still room with room for enhancements eg. for brand alignment. 

 

What Would Be Added with More Time 

1. Backend Integration 

Store data in a persistent database (e.g., MongoDB, PostgreSQL, Supabase). 

2. Authentication & Authorization 

Add login/logout flows. 

Role-based access control (admin vs. staff views). 

Integrate secure token-based auth (JWT or OAuth). 

3. Real Data Integration 

Fetch real-time user data via: 

Google Workspace APIs (e.g., Drive usage, last login) 

Device management APIs for live device status 

4. More Robust To-Do Features 

Add due dates and reminder notifications. 

Enable drag-and-drop for task prioritization. 

Filter tasks (e.g., show only incomplete or completed). 

5. Improved Error Handling & UX 

Add user feedback for actions (e.g., toast notifications). 

Validate inputs with clearer error messages. 

Gracefully handle loading and error states for data fetching. 

Conclusion 

This project has created a foundation for a modern staff directory and task management interface which is inspired by Google Workspace. It demonstrates a layout using React, Tailwind CSS, and generated data. With more time, the system can be developed into a full-featured dashboard with real-time insights, authentication, and better system integration. 